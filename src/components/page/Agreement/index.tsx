'use client'

import React, { useState } from 'react'
import { Checkbox, Button, Typography, CardContent, Card, CardActions } from '@mui/material'
import 'styles/agreementForm.css'
import Image from 'next/image'
import Link from 'next/link'
import { ITEMS } from 'constant/items'

const Agreement: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false)

  const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked)
  }

  const handleNextStep = () => {
    if (agreed) {
      // 次のページで移動するロジック追加
      console.log('移動する')
    } else {
      alert('チェックボックスを確認してください。')
    }
  }

  return (
      <React.Fragment>
      <Card sx={{ minWidth: 275 }} className='container'>
      <CardContent>
        <Image src="/img/BI.png" alt="BI Image" className="bi-image" width={150} height={110} />
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" fontWeight="bold" component="div">
        {ITEMS.TITLE}
        </Typography>
        <br/><br/>
        <Typography variant="body2">
            {ITEMS.GUIDENCE_INTRO_A}<br/>
            {ITEMS.GUIDENCE_INTRO_B}<br/>
            {ITEMS.GUIDENCE_INTRO_C}
        </Typography>
        <br/>
        <Typography variant="body2">
        {ITEMS.GUIDENCE_INTRO_D}<br/>
        {ITEMS.GUIDENCE_INTRO_E}
        </Typography>
        <br/>
        <Typography variant="body2">
        {ITEMS.GUIDENCE_INTRO_F}
        </Typography>
        <br/>
        <Typography>
        <Checkbox
            className='agreeCheckbox'
            checked={agreed}
            onChange={handleAgreementChange}
            inputProps={{ 'aria-label': '同義確認' }}
        />
        <Link href="/privacy-policy" className="blue-text">プライバシーポリシー</Link>同義</Typography>
      <CardActions className='button'>
      <Link href="/registration">
        <Button size="large" variant="contained" onClick={handleNextStep} disabled={!agreed}>
          登録開始
        </Button>
      </Link>
      </CardActions>
      </CardContent>
    </Card>
    </React.Fragment>
    
  )
}

export default Agreement
