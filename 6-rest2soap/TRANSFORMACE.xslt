<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>

    <xsl:template match="/">

        <PointsOfInterestsRes>
            <places>
            <item>
                <xsl:for-each select="./root/headers">
                        <timestamp><xsl:value-of select="X-Execution-Timestamp"/></timestamp>
                </xsl:for-each>

            </item>
            </places>
        </PointsOfInterestsRes>

    </xsl:template>
</xsl:stylesheet>

