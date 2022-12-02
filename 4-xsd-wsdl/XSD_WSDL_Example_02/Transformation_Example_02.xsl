<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output omit-xml-declaration="yes" indent="yes"/>

    <xsl:template match="/">

    <katalog>
        <xsl:for-each select="./catalog/book[genre!='Romance'] | ./catalog/book[price&gt;'5']">
          <kniha>
                <id><xsl:value-of select="./@id"/></id>
                <autor><xsl:value-of select="author"/></autor>
                <zanr><xsl:value-of select="genre"/></zanr>
                <cena><xsl:value-of select="price"/></cena>
                <publikovano><xsl:value-of select="publish_date"/></publikovano>
          </kniha>
        </xsl:for-each>
    </katalog>
    </xsl:template>
</xsl:stylesheet>