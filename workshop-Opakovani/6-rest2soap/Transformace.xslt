<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>

    <xsl:template match="/">

        <zoo>
            <animals>
                <xsl:for-each select="/pets/Pet[position() &lt;=10]">
                    <animal>
                        <name><xsl:value-of select="./name"/></name>
                    </animal>
                </xsl:for-each>
            </animals>


        </zoo>




    </xsl:template>
</xsl:stylesheet>
