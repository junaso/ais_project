'use client'

import React, { useState } from 'react'
import { Checkbox, Button } from '@mui/material'


const AgreementForm: React.FC = () => {
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
    <div>
        <h2>ご来訪のお客様へ</h2>
        <Checkbox
            checked={agreed}
            onChange={handleAgreementChange}
            inputProps={{ 'aria-label': '同義確認' }}
        />
        <br />
        <p>
            いつもお世話になっております。
            弊社は、個人情報護法を順守しており、
            各種情報を安全、確実に取り扱っております。
        </p>
        <br />
        <p>
            その為、ご来訪（入室）のお客様に
            入室登録をお願いしております。
        </p>
        <br />
        <p>
            ご協力お願い申し上げます。
        </p>
        <label><a href="#">プライバシーポリシー</a>同義</label>
        <br />
        <Button variant="contained" onClick={handleNextStep} disabled={!agreed}>
            登録開始
        </Button>
        
        </div>
  )
}

export default AgreementForm
