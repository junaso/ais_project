'use client'

import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import 'styles/privacyPolicy.css'
import Image from "next/image"
import Link from "next/link"
import { ITEMS } from "constant/items"

const PrivacyPolicy = () => {

    return (
        <Card sx={{ minWidth: 275 }} className="container">
      <CardContent>
        <Image src="/img/BI.png" alt="BI Image" className="bi-image" width={150} height={110} />
        <br/>
        <Typography variant="h5" component="div"  align="left">
            {ITEMS.PRIVACY_TITLE}
        </Typography>
        <br/>
        <Typography variant="body2" align="left" >
        {ITEMS.GUIDANCE_INTRO_A}<br/>
        {ITEMS.PRIVACY_INTRO_AB}<br/>
        {ITEMS.PRIVACY_INTRO_AC}<br/>
        {ITEMS.PRIVACY_INTRO_AD}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_B}<br/>
        {ITEMS.PRIVACY_INTRO_BA}<br/>
        {ITEMS.PRIVACY_INTRO_BB}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_C}<br/>
        {ITEMS.PRIVACY_INTRO_CA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRiVACY_INTRO_D}<br/>
        {ITEMS.PRiVACY_INTRO_DA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_E}<br/>
        {ITEMS.PRIVACY_INTRO_EA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_F}<br/>
        {ITEMS.PRIVACY_INTRO_FA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_G}<br/>
        {ITEMS.PRIVACY_INTRO_GA}<br/>
        {ITEMS.PRIVACY_INTRO_GB}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_H}<br/>
        {ITEMS.PRIVACY_INTRO_HA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_I}<br/>
        {ITEMS.PRIVACY_INTRO_IA}<br/>
        {ITEMS.PRIVACY_INTRO_IB}<br/>
        {ITEMS.PRIVACY_INTRO_IC}
        </Typography>
        <br/>
        <Typography variant="body2" align="left">
        {ITEMS.PRIVACY_INTRO_J}<br/>
        {ITEMS.PRIVACY_INTRO_JA}<br/>
        {ITEMS.PRIVACY_INTRO_JB}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_K}<br/>
        {ITEMS.PRIVACY_INTRO_KA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_L}<br/>
        {ITEMS.PRIVACY_INTRO_LA}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY_INTRO_M}<br/>
        {ITEMS.PRIVACY_INTRO_MA}
        </Typography>
        <br/>
        <Typography variant="body2" className="text-end"  align="left">
        {ITEMS.PRIVACY_INTRO_N}<br/><br/>
        {ITEMS.PRIVACY_INTRO_NA}<br/><br/>
        {ITEMS.PRIVACY_INTRO_NB}<br/><br/>
        {ITEMS.PRIVACY_INTRO_NC}
        </Typography>
      <CardActions style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Link href="/agreement">
        <Button size="large" variant="contained">戻る</Button>
        </Link>
      </CardActions>
      </CardContent>
    </Card>
    )
}

export default PrivacyPolicy