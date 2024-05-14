import React from 'react'

import { Box, Button, Grid } from '@mui/material'

import type { FormStep, VisitRecord } from 'types/visitRecord'

import Link from 'next/link'

interface ReviewStepProps {
  data: VisitRecord | undefined
  onNext: () => void
  // onPrevious: () => void
  onUpdateStep: (index: number, step: FormStep) => void
  onUpdateData: (data: VisitRecord) => void
}

const ReviewStep = React.forwardRef<HTMLButtonElement, ReviewStepProps>(({ data, onNext, onUpdateData }) => {
  const handleCreateVisitRecord = () => {

    console.log("test01", data)

    if (data) {
      console.log("test")
      onUpdateData(data)
    }
    onNext()
  }

  return (
    <Grid container spacing={3}>
      登録しますか（テスト）
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Link href="/agreement">
        <Button sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>キャンセル</Button>
        </Link>
        <Button onClick={handleCreateVisitRecord} sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>登録</Button>
      </Box>
    </Grid>
  )
})

export default ReviewStep
