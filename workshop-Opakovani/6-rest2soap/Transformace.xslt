<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>


    <xsl:template match="/">
        <soapenv:Envelope
                xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                xmlns:soap="http://www.jpower8.com/newDeveloper/soap">
            <soapenv:Header/>
            <soapenv:Body>

        <soap:PointsOfInterestsRes>
            <soap:requestID><xsl:value-of select="/root/headers/X-Request-Id"/></soap:requestID>
            <soap:places>
                <!--Zero or more repetitions:-->
                <xsl:for-each select="/root/data/item">
                <soap:item>
                    <soap:timestamp>
                        <xsl:value-of select="/root/headers/X-Execution-Timestamp"/>
                    </soap:timestamp>
                    <soap:id>
                        <xsl:value-of select="position()"/>
                    </soap:id>
                    <soap:name>
                        <xsl:value-of select="./name"/>
                    </soap:name>
                    <soap:address>
                        <soap:street><xsl:value-of select="./address/street"/></soap:street>
                        <soap:houseNo><xsl:value-of select="./address/house_no"/></soap:houseNo>
                        <soap:town><xsl:value-of select="./address/town"/></soap:town>
                        <soap:postal><xsl:value-of select="./address/postal"/></soap:postal>
                        <soap:country><xsl:value-of select="./address/country"/></soap:country>
                    </soap:address>
                    <soap:type>
                        <xsl:value-of select="/root/body/RequestData/filter/type"/>
                    </soap:type>
                    <soap:url>https://www.csob.cz/pobocky/radlicka</soap:url>
                    <soap:hours>
                        <!--1 to 7 repetitions:-->
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


        </soap:PointsOfInterestsRes>


        </soapenv:Body>
    </soapenv:Envelope>
    </xsl:template>

</xsl:stylesheet>
