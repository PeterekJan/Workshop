<xsl:stylesheet version="2.0"
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

        <PointsOfInterestsRes>
            <requestID><xsl:value-of select="./root/headers/X-Request-Id"/></requestID>
            <places>
                <xsl:for-each select="./root/data/item">
                    <item>
                            <timestamp><xsl:value-of select="/root/headers/X-Execution-Timestamp"/></timestamp>
                            <id><xsl:value-of select="position()"/></id>

                        <name><xsl:value-of select="./name"/></name>
                        <address>
                            <street><xsl:value-of select="./address/street"/></street>
                            <houseNo><xsl:value-of select="./address/house_no"/></houseNo>
                            <town><xsl:value-of select="./address/town"/></town>
                            <postal><xsl:value-of select="./address/postal"/></postal>
                            <country><xsl:value-of select="./address/country"/></country>
                        </address>

                            <type><xsl:value-of select="/root/body/RequestData/filter/type"/></type>
                        <url>https://www.csob.cz/pobocky/radlicka</url>
                        <hours>
                            <hour>
                                <day>Po</day>
                                <from>8:00</from>
                                <to>16:00</to>
                            </hour>
                            <hour>
                                <day>Út</day>
                                <from>8:00</from>
                                <to>16:00</to>
                            </hour>
                            <hour>
                                <day>St</day>
                                <from>8:00</from>
                                <to>16:00</to>
                            </hour>
                            <hour>
                                <day>Čt</day>
                                <from>8:00</from>
                                <to>16:00</to>
                            </hour>
                            <hour>
                                <day>Pa</day>
                                <from>8:00</from>
                                <to>16:00</to>
                            </hour>
                            <hour>
                                <day>So</day>
                                <from>CLOSED</from>
                                <to>CLOSED</to>
                            </hour>
                            <hour>
                                <day>Ne</day>
                                <from>CLOSED</from>
                                <to>CLOSED</to>
                            </hour>
                        </hours>
                    </item>
                </xsl:for-each>
            </places>
            <filter>
                <type><xsl:value-of select="./root/body/RequestData/filter/type"/></type>
                <pageLimit><xsl:value-of select="./root/body/RequestData/filter/limit"/></pageLimit>
                <brand><xsl:value-of select="$brand"/></brand>
                <brandName><xsl:value-of select="$BrandName"/> </brandName>
            </filter>
        </PointsOfInterestsRes>



    </xsl:template>
</xsl:stylesheet>

