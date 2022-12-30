<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>


    <xsl:template match="/">
        <PointsOfInterestsRes>
            <requestID>
                <xsl:value-of select=".//X-Request-Id"/>
            </requestID>
            <places>
                <xsl:for-each select=".//item">
                    <item>
                        <timestamp><xsl:value-of select=".//X-Execution-Timestamp"/></timestamp>
                        <id>123456</id>
                        <name><xsl:value-of select=".//name"/></name>
                        <xsl:for-each select=".//address">
                            <address>
                                <street><xsl:value-of select="street"/></street>
                                <houseNo><xsl:value-of select="house_no"/></houseNo>
                                <town><xsl:value-of select="town"/></town>
                                <postal><xsl:value-of select="postal"/></postal>
                                <country><xsl:value-of select="country"/></country>
                            </address>
                        </xsl:for-each>
                        <type>
                            <xsl:value-of select="./root/body/RequestData/filter/type"/>
                        </type>
                    </item>
                </xsl:for-each>
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