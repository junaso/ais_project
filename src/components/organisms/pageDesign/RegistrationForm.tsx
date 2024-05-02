'use client'
import React, { useEffect, useState } from 'react'
import { Button, Input, TextField, Typography } from '@mui/material'
import { Box } from '@mui/material'
import useRegistrationForm from 'hooks/useRegistration'
import { mockFormData } from 'mocks/registrationMock'

const initialFormData = mockFormData

const RegistrationForm = () => {
    const { formData, handleSubmit, handleChange } = useRegistrationForm()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, []);

    const handleNext = () => {
        // 上位component連結
        const nextPageData = {
            formData, // 今のフォームデータ
        };
        // ページ移動を処理するためのcallback関数を呼ぶ
        // onNextPage(nextPageData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gap: 2, justifyContent: 'center' }}>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>＝本社情報</Typography>
                </Box>
                <Typography sx={{ fontWeight: 'bold', mt: 3 }}>お名前</Typography>
                <Input className="stylesheet" placeholder="お名前をご入力ください。" name="visName" value={formData.visName} onChange={handleChange} />
                <Typography sx={{ fontWeight: 'bold', mt: 3 }}>会社名</Typography>
                <Input className="stylesheet" placeholder="会社名をご入力ください。" name="companyName" value={formData.companyName} onChange={handleChange} />
                <Typography sx={{ fontWeight: 'bold', mt: 3 }}>連絡先（電話番号）</Typography>
                <Input className="stylesheet" placeholder="連絡先をご入力ください。" name="tel" value={formData.tel} onChange={handleChange} />
                <Typography sx={{ fontWeight: 'bold', mt: 3 }}>同行人数</Typography>
                <TextField type="number" InputLabelProps={{ shrink: true }} name="numberWith" value={formData.numberWith} onChange={handleChange} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                <Button sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>キャンセル</Button>
                <Button onClick={handleNext} sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>次へ</Button>
            </Box>
        </form>
    )
}

export default RegistrationForm
// 次のページへ連結してくれるコード
// function onNextPage(nextPageData: { formData: { visName: string; companyName: string; tel: string; numberWith: number; } }) {
//     throw new Error('Function not implemented.')
// }

