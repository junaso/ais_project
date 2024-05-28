import React, { useState } from 'react'
import { Typography, CardContent, Card, CardActions } from '@mui/material'
import 'styles/common.css'
import Image from 'next/image'
import Link from 'next/link'
import { ITEMS } from 'constant/items'
import { AisButton, PrivacyCheckbox } from 'styles/muStyle'
import { PAGES } from 'constant/route-path'

type AgreementProps = {
  onStart: () => void
}

const Agreement = ({ onStart }: AgreementProps) => {

  const [agreed, setAgreed] = useState<boolean>(false)

  const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked)
  }

  const handleStart = () => {
    onStart()
  }

  return (
    <div style={{ backgroundColor: '#FFF3E2', minHeight: '100vh', padding: '20px' }}>
    <Card className='container'>
      <CardContent>
        <Image src="/img/BI.png" alt="BI Image" className="bi-image" width={150} height={110} />
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" fontWeight="bold" component="div">
          {ITEMS.AGREEMENT.TITLE}
        </Typography>
        <br /><br />
        <Typography variant="body2">
          {ITEMS.AGREEMENT.GUIDANCE_INTRO_A}<br />
          {ITEMS.AGREEMENT.GUIDANCE_INTRO_B}<br />
          {ITEMS.AGREEMENT.GUIDANCE_INTRO_C}
        </Typography>
        <br />
        <Typography variant="body2">
          {ITEMS.AGREEMENT.GUIDANCE_INTRO_D}<br />
          {ITEMS.AGREEMENT.GUIDANCE_INTRO_E}
        </Typography>
        <br />
        <Typography variant="body2">
          {ITEMS.AGREEMENT.GUIDANCE_INTRO_F}
        </Typography>
        <br />
        <Typography>
          <PrivacyCheckbox
            className='agreeCheckbox'
            checked={agreed}
            onChange={handleAgreementChange}
            inputProps={{ 'aria-label': '同義確認' }}
          />
          <Link href={PAGES.PRIVACY_POLICY} className="blue-text">プライバシーポリシー</Link>同義</Typography>
        <CardActions className='button'>
          <AisButton size="large" variant="contained" onClick={handleStart} disabled={!agreed}>
            登録開始
          </AisButton>
        </CardActions>
      </CardContent>
    </Card>
    </div>
  )
}

export default Agreement
