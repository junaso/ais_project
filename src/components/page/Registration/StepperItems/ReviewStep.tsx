import React from 'react'

import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import type { FormStep, VisitRecord } from 'types/visitRecord'

import 'styles/reviewStep.css'





interface ReviewStepProps {
  data: VisitRecord | undefined
  onNext: () => void
  // onPrevious: () => void
  onUpdateStep: (index: number, step: FormStep) => void
  onUpdateData: (data: VisitRecord) => void
  onResetData: () => void
}

const ReviewStep = React.forwardRef<HTMLButtonElement, ReviewStepProps>(({ data, onNext, onUpdateData, onResetData }) => {
  const handleCreateVisitRecord = () => {

    console.log("test01", data)

    if (data) {
      console.log("test")
      onUpdateData(data)
    }
    onNext()
  }

  const handleCancel = () => {
    // 初期化するメソッド
    onResetData()
    // 初期化すると同時にagreementページで連結
    window.location.href = '/agreement'
  }


  return (
    <Grid container spacing={3}>
      <TableContainer className="stepper-container">
        <Table className='container'>
          <TableBody>
            {data && (
              <>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>お名前</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.visName}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>会社名</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.companyName}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>同行人数</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.numberWith}名</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>連絡先（電話番号）</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.tel}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>面会者（弊社担当者）</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.empNo}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>ご用件</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.reason}</Typography></TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
            <Box
             sx={{
              display: 'flex', 
              justifyContent: 'center',
              gap: 2, mt: 3,
              alignItems: 'center',
              justifyItems: 'center' }}>
              <Button onClick={handleCancel} sx={{ width: '150px', height: '40px', fontWeight: 'bold' }}>キャンセル</Button>
              <Button onClick={handleCreateVisitRecord} sx={{ width: '150px', height: '40px', fontWeight: 'bold' }}>登録</Button>
            </Box>
      </TableContainer>
    </Grid>
  )
})

export default ReviewStep
