<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>

    <xsl:template match="/">

        <PointsOfInterestsRes>
            <places>
                <item>
                    <xsl:for-each select="./root/headers">
                        <timestamp><xsl:value-of select="X-Execution-Timestamp"/></timestamp>
                        <id><xsl:value-of select="X-Request-Id"/></id>
                    </xsl:for-each>


                    <xsl:for-each select="./root/data/item">

                        <name><xsl:value-of select="name"/></name>
                    </xsl:for-each>

                    <xsl:for-each select="./root/data/item/address">
                        <address>
                            <street><xsl:value-of select="street"/></street>
                            <houseNo><xsl:value-of select="house_no"/></houseNo>
                            <town><xsl:value-of select="town"/></town>
                            <postal><xsl:value-of select="postal"/></postal>
                            <country><xsl:value-of select="country"/></country>
                        </address>
                    </xsl:for-each>

                    <xsl:for-each select="./root/body/RequestData/filter">
                        <type><xsl:value-of select="type"/></type>
                    </xsl:for-each>


                </item>




            </places>
        </PointsOfInterestsRes>

    </xsl:template>
</xsl:stylesheet>

<xsl:choose>
<xsl:when test="/root/body/RequestData/filter/brand = 1 or /root/body/RequestData/filter/brand = 2 or /root/body/RequestData/filter/brand = 3 ">
    <xsl:value-of select="/root/body/RequestData/filter/brand"/>
</xsl:when>
<xsl:otherwise>0</xsl:otherwise>
</xsl:choose>


<xsl:for-each select="./root/headers">
<timestamp><xsl:value-of select="X-Execution-Timestamp"/></timestamp>
<id><xsl:value-of select="X-Request-Id"/></id>
</xsl:for-each>



<soapenv:Envelope
xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:soap="http://www.jpower8.com/newDeveloper/soap">
<soapenv:Header/>
<soapenv:Body>
    <soap:PointsOfInterestsRes>
        <soap:requestID>?</soap:requestID>
        <soap:places>
            <!--Zero or more repetitions:-->
            <soap:item>
                <soap:timestamp>?</soap:timestamp>
                <soap:id>?</soap:id>
                <soap:name>?</soap:name>
                <soap:address>
                    <soap:street>?</soap:street>
                    <soap:houseNo>?</soap:houseNo>
                    <soap:town>?</soap:town>
                    <soap:postal>?</soap:postal>
                    <soap:country>?</soap:country>
                </soap:address>
                <soap:type>?</soap:type>
                <soap:url>?</soap:url>
                <soap:hours>
                    <!--1 to 7 repetitions:-->
                    <soap:hour>
                        <soap:day>?</soap:day>
                        <soap:from>?</soap:from>
                        <soap:to>?</soap:to>
                    </soap:hour>
                </soap:hours>
            </soap:item>
        </soap:places>
        <soap:filter>
            <soap:type>?</soap:type>
            <soap:pageLimit>?</soap:pageLimit>
            <soap:brand>?</soap:brand>
            <soap:brandName>?</soap:brandName>
        </soap:filter>
    </soap:PointsOfInterestsRes>
</soapenv:Body>
</soapenv:Envelope>




<soapenv:Envelope
xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:soap="http://www.jpower8.com/newDeveloper/soap">


<xsl:for-each select="./root/data/item">
    <xsl:value-of select="name"/>
</xsl:for-each>
