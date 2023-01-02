<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>

    <xsl:template match="/">

        <xsl:variable name="brand_variable">
            <xsl:value-of select="/root/body/RequestData/filter/brand"/>
        </xsl:variable>

        <xsl:variable name="brand">
            <xsl:choose>
                    <xsl:when test="$brand_variable = 1 or $brand_variable = 2 or $brand_variable = 3 ">
                        <xsl:value-of select="$brand_variable"/>
                    </xsl:when>
                <xsl:otherwise>0</xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <xsl:variable name="BrandName">
            <xsl:choose>
                <xsl:when test="$brand = 1">ČSOB</xsl:when>
                <xsl:when test="$brand = 2">ČSOB SK</xsl:when>
                <xsl:when test="$brand = 3">Česká pošta</xsl:when>
                <xsl:otherwise>unknown</xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://www.jpower8.com/newDeveloper/soap">
            <soapenv:Header/>
                <soapenv:Body>
                     <soap:PointsOfInterestsRes>
                        <soap:requestID><xsl:value-of select="/root/headers/X-Request-Id"/></soap:requestID>
                        <soap:places>
                    <xsl:for-each select="/root/data/item">
                        <soap:item>
                            <soap:timestamp><xsl:value-of select="/root/headers/X-Execution-Timestamp"/></soap:timestamp>
                            <soap:id><xsl:value-of select="position()"/></soap:id>

                        <soap:name><xsl:value-of select="./name"/></soap:name>
                        <soap:address>
                            <soap:street><xsl:value-of select="./address/street"/></soap:street>
                            <soap:houseNo><xsl:value-of select="./address/house_no"/></soap:houseNo>
                            <soap:town><xsl:value-of select="./address/town"/></soap:town>
                            <soap:postal><xsl:value-of select="./address/postal"/></soap:postal>
                            <soap:country><xsl:value-of select="./address/country"/></soap:country>
                        </soap:address>

                                <soap:type><xsl:value-of select="/root/body/RequestData/filter/type"/></soap:type>
                                <soap:url>https://www.csob.cz/pobocky/radlicka</soap:url>
                                <soap:hours>
                                    <soap:hour>
                                        <soap:day>Po</soap:day>
                                        <soap:from>8:00</soap:from>
                                        <soap:to>16:00</soap:to>
                                    </soap:hour>
                                    <soap:hour>
                                        <soap:day>Út</soap:day>
                                        <soap:from>8:00</soap:from>
                                        <soap:to>16:00</soap:to>
                                    </soap:hour>
                                    <soap:hour>
                                        <soap:day>St</soap:day>
                                        <soap:from>8:00</soap:from>
                                        <soap:to>16:00</soap:to>
                                    </soap:hour>
                                    <soap:hour>
                                        <soap:day>Čt</soap:day>
                                        <soap:from>8:00</soap:from>
                                        <soap:to>16:00</soap:to>
                                    </soap:hour>
                                    <soap:hour>
                                        <soap:day>Pa</soap:day>
                                        <soap:from>8:00</soap:from>
                                        <soap:to>16:00</soap:to>
                                    </soap:hour>
                                    <soap:hour>
                                        <soap:day>So</soap:day>
                                        <soap:from>CLOSED</soap:from>
                                        <soap:to>CLOSED</soap:to>
                                    </soap:hour>
                                    <soap:hour>
                                        <soap:day>Ne</soap:day>
                                        <soap:from>CLOSED</soap:from>
                                        <soap:to>CLOSED</soap:to>
                                    </soap:hour>
                                </soap:hours>
                            </soap:item>
                        </xsl:for-each>
                    </soap:places>
                    <soap:filter>
                        <soap:type><xsl:value-of select="/root/body/RequestData/filter/type"/></soap:type>
                        <soap:pageLimit><xsl:value-of select="/root/body/RequestData/filter/limit"/></soap:pageLimit>
                        <soap:brand><xsl:value-of select="$brand"/></soap:brand>
                        <soap:brandName><xsl:value-of select="$BrandName"/> </soap:brandName>
                    </soap:filter>
                </soap:PointsOfInterestsRes>
            </soapenv:Body>
        </soapenv:Envelope>
    </xsl:template>
</xsl:stylesheet>

