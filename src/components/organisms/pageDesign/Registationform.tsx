import React from 'react'
import { Button, Input, TextField, Typography } from '@mui/material'
import { Box } from '@mui/material'

const InputVariants = () => {
    return (
        <>
            <form>   
                <Box sx={{ display: 'grid', gap: 2, justifyContent: 'center' }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>＝本社情報</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }}>お名前</Typography>
                    <Input className="stylesheet" placeholder="お名前をご入力ください。" />
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }}>会社名</Typography>
                    <Input className="stylesheet" placeholder="会社名をご入力ください。" />
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }}>連絡先（電話番号）</Typography>
                    <Input className="stylesheet" placeholder="連絡先をご入力ください。" />
                    <Typography sx={{ fontWeight: 'bold', mt: 3 }}>同行人数</Typography>
                    <TextField type="number" InputLabelProps={{ shrink: true }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                    <Button type='submit' sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>キャンセル</Button>
                    <Button sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>次へ</Button>
                </Box>
            </form>
        </>
    )
}

export default InputVariants
