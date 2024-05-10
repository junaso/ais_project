'use client'

import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import 'styles/privacyPolicy.css'
import Image from "next/image"
import { useEffect, useState } from "react"

const PrivacyPolicy = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Card sx={{ minWidth: 275 }} className="container">
      <CardContent>
        <Image src="/img/BI.png" alt="BI Image" className="bi-image" width={150} height={110} />
        <br/>
        <Typography variant="h5" component="div">
            個人情報保護方針
        </Typography>
        <br/>
        <Typography variant="body2">
        株式会社亜細亜情報システム代表取締役社長 田中 耕一郎（以下、弊社）は、<br/>
        各システム開発を行う情報処理事業者として顧客や社内の機密情報に接することが多々あります。<br/>
        個人情報を含むこれらの機密情報は適切に取扱い確実に保護することが社会的責務であり、<br/>
        弊社も法令順守に従って確実に実行してゆきます。
        </Typography>
        <br/>
        <Typography variant="body2">
        弊社は人を大切にし、 お客様と共に歩み成長しつづけることを企業理念にしています。<br/>
        従って、個人情報を始め全ての機密情報の取り扱いと保護に関するマネージメントシステムを確立し、<br/>
        業務に携わる全社員がこれを実行、維持し、改善を図ることを宣言します。
        </Typography>
        <br/>
        <Typography variant="body2">
        1. 弊社は個人情報を取得するに当たってはその利用目的をできる限り特定し、<br/>
        その目的の達成に必要な限度において個人情報を取得いたします。
        </Typography>
        <br/>
        <Typography variant="body2">
        2. 個人情報を本人から直接書面によって取得する場合は、弊社名、個人情報保護管理者名及び連絡先、<br/>
        利用目的等をお知らせした上で必要な範囲で個人情報を取得いたします。
        </Typography>
        <br/>
        <Typography variant="body2">
        3. 個人情報の利用は本人が同意をした利用目的の範囲内で行います。<br/>
        また、利用目的範囲外の利用を行わないために必要な対策を講じる手順を確立し実施致します。
        </Typography>
        <br/>
        <Typography variant="body2">
        4. 弊社は保有する個人情報を適切な方法で管理し、<br/>
        特段の事情がない限り、本人の承諾なしに第三者に開示・提供いたしません。
        </Typography>
        <br/>
        <Typography variant="body2">
        5. 弊社は保有する個人情報を利用目的に応じ必要な範囲内において、<br/>
        正確、かつ、最新の状態で管理し、個人情報の漏洩、<br/>
        滅失又は毀損のなどに対して合理的な安全対策を講じ、予防並びに是正に努めます。
        </Typography>
        <br/>
        <Typography variant="body2">
        6. 弊社が個人情報の処理を外部へ委託する場合には、<br/>
        漏洩や第三者への提供を行わないよう契約により義務づけ適切な管理を実施いたします。
        </Typography>
        <br/>
        <Typography variant="body2">
        7. 弊社が保有する個人情報について、本人より自己の情報の開示を求められた場合には、<br/>
        弊社の問合せ窓口まで連絡いただくことにより、合理的な期間内に対応いたします。<br/>
        また、開示の結果、誤った情報があり、<br/>
        訂正や削除が求められる場合には、合理的な期間内にこれに応じます。
        </Typography>
        <br/>
        <Typography variant="body2">
        8. 弊社が保有する個人情報について、<br/>
        本人より自己の情報について利用又は第三者への提供を<br/>
        拒まれる場合には弊社の問合せ窓口まで連絡いただくことにより、これに対応いたします。
        </Typography>
        <br/>
        <Typography variant="body2">
        9. 弊社が保有する個人情報についての苦情・相談は<br/>
        弊社の問合せ窓口まで連絡いただくことにより、これに対応いたします。
        </Typography>
        <br/>
        <Typography variant="body2">
        10. 弊社が保有する個人情報に関して適用される法令、<br/>
        国が定める指針及びその他の規範を遵守いたします。
        </Typography>
        <br/>
        <Typography variant="body2">
        11. 弊社は、個人情報保護に関するマネジメントシステムを定め、<br/>
        これを定期的に見直しし継続的に改善いたします。
        </Typography>
        <br/>
        <Typography variant="body2" className="text-end">
        2006年5月1日 制定<br/><br/>
        2021年4月10日 改定<br/><br/>
        株式会社亜細亜情報システム<br/><br/>
        代表取締役社長  田中 耕一郎
        </Typography>
      <CardActions style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Button size="large" variant="contained">戻る</Button>
      </CardActions>
      </CardContent>
    </Card>
    )
}

export default PrivacyPolicy