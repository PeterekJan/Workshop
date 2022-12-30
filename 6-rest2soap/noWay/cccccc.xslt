<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="/">



        <PointsOfInterestsRes>
            <xsl:for-each select="./root/headers">
                <requestID><xsl:value-of select="./X-Request-Id"/></requestID>
            </xsl:for-each>
            <places>

                <xsl:for-each select="./root/data/item">
                    <item>
                        <xsl:for-each select="./root/headers">
                            <timestamp><xsl:value-of select="X-Execution-Timestamp"/></timestamp>
                        </xsl:for-each>
                        <id>1</id>
                        <name>
                            <xsl:value-of select="name"/>
                        </name>
                        <xsl:for-each select="./address">
                            <address>
                                <street><xsl:value-of select="./street"/></street>
                                <houseNo><xsl:value-of select="./house_no"/></houseNo>
                                <town><xsl:value-of select="./town"/></town>
                                <postal><xsl:value-of select="./postal"/></postal>
                                <country><xsl:value-of select="./country"/></country>
                            </address>
                        </xsl:for-each>
                    </item>
                </xsl:for-each>
            </places>


        </PointsOfInterestsRes>


    </xsl:template>
</xsl:stylesheet>