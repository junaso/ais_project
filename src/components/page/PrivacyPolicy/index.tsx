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
            {ITEMS.PRIVACY.TITLE}
        </Typography>
        <br/>
        <Typography variant="body2" align="left" >
        {ITEMS.PRIVACY.PRIVACY_PREAMBLE_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_PREAMBLE_B}<br/>
        {ITEMS.PRIVACY.PRIVACY_PREAMBLE_C}<br/>
        {ITEMS.PRIVACY.PRIVACY_PREAMBLE_D}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_GROWTH_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_GROWTH_B}<br/>
        {ITEMS.PRIVACY.PRIVACY_GROWTH_C}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_USE_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_USE_B}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_CONSENT_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_CONSENT_B}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_CONTROL_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_CONTROL_B}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_RATIONAL_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_RATIONAL_B}<br/>
        {ITEMS.PRIVACY.PRIVACY_RATIONAL_C}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_LEAKAGE_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_LEAKAGE_B}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_INQUIRY_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_INQUIRY_B}<br/>
        {ITEMS.PRIVACY.PRIVACY_INQUIRY_C}<br/>
        {ITEMS.PRIVACY.PRIVACY_INQUIRY_D}
        </Typography>
        <br/>
        <Typography variant="body2" align="left">
        {ITEMS.PRIVACY.PRIVACY_SUPPORT_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_SUPPORT_B}<br/>
        {ITEMS.PRIVACY.PRIVACY_SUPPORT_C}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_COMPLAINT_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_COMPLAINT_B}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_COMPLY_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_COMPLY_B}
        </Typography>
        <br/>
        <Typography variant="body2"  align="left">
        {ITEMS.PRIVACY.PRIVACY_DECIDE_A}<br/>
        {ITEMS.PRIVACY.PRIVACY_DECIDE_B}
        </Typography>
        <br/>
        <Typography variant="body2" className="text-end"  align="left">
        {ITEMS.PRIVACY.PRIVACY_END_A}<br/><br/>
        {ITEMS.PRIVACY.PRIVACY_END_B}<br/><br/>
        {ITEMS.PRIVACY.PRIVACY_END_C}<br/><br/>
        {ITEMS.PRIVACY.PRIVACY_END_D}
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