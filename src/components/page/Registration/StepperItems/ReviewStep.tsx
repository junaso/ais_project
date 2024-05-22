import React from 'react'

import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import type { FormStep, VisitRecord } from 'types/visitRecord'

import 'styles/reviewStep.css'
import { ITEMS } from 'constant/items'

interface ReviewStepProps {
  data: VisitRecord | undefined
  onNext: () => void
  onUpdateStep: (index: number, step: FormStep) => void
  onUpdateData: (data: VisitRecord) => void
  onPrevious: () => void
}

const ReviewStep = React.forwardRef<HTMLButtonElement, ReviewStepProps>(({ data, onNext, onUpdateData, onPrevious }) => {
  
  const handleCreateVisitRecord = () => {
    if (data) {
      onUpdateData(data)
    }
    onNext()
  }

  const handlePrevious = () => {
    onPrevious()
  }

  return (
    <Grid container spacing={3}>
      <TableContainer>
        <Table>
          <TableBody>
            {data && (
              <>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_NAME}</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.visName}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_COMPANY}</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.companyName}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_COMPANITON}</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.numberWith}{ITEMS.REVIEW.REVIEW_MANY}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_CONTACT}</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.tel}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_OURCOMPANY}</Typography></TableCell>
                  <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>{data.empNo}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_BUSINESS}</Typography></TableCell>
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
            justifyItems: 'center'
          }}>
          <Button onClick={handlePrevious} sx={{ width: '150px', height: '40px', fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_FORTH}</Button>
          <Button onClick={handleCreateVisitRecord} sx={{ width: '150px', height: '40px', fontWeight: 'bold' }}>{ITEMS.REVIEW.REVIEW_REGISTER}</Button>
        </Box>
      </TableContainer>
    </Grid>
  )
})

export default ReviewStep
