<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>

    <xsl:template match="/">

        <PointsOfInterestsRes>
            <requestID><xsl:value-of select="./root/headers/X-Request-Id"/></requestID>
            <places>
                <xsl:for-each select="./root">
                    <item>
                        <xsl:for-each select="./headers">
                            <timestamp><xsl:value-of select="X-Execution-Timestamp"/></timestamp>
                            <id>generuju</id>
                        </xsl:for-each>

                        <name><xsl:value-of select="./data/item/name"/></name>

                        <address>
                            <street><xsl:value-of select="./data/item/address/street"/></street>
                            <houseNo><xsl:value-of select="./data/item/address/house_no"/></houseNo>
                            <town><xsl:value-of select="./data/item/address/town"/></town>
                            <postal><xsl:value-of select="./data/item/address/postal"/></postal>
                            <country><xsl:value-of select="./data/item/address/country"/></country>
                        </address>

                        <xsl:for-each select="./body/RequestData/filter">
                            <type><xsl:value-of select="type"/></type>
                        </xsl:for-each>
                        <url>generuju</url>
                        <hours>
                            <hour>
                                <day></day>
                                <from></from>
                                <to></to>
                            </hour>
                        </hours>
                    </item>
                </xsl:for-each>
            </places>
        </PointsOfInterestsRes>
    </xsl:template>
</xsl:stylesheet>

