import React from 'react'

import { Box,  Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import type { FormStep, VisitRecord } from 'types/visitRecord'

import 'styles/reviewStep.css'
import { ITEMS } from 'constant/items'
import { AisButton, CancleButton,  } from 'styles/muStyle'

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
    <div style={{ backgroundColor: '#FFF3E2', minHeight: '100vh', padding: '20px' }}>
    <Grid>
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
                  <TableCell sx={{ maxWidth: 250, wordWrap: 'break-word', padding: 1 }}>
                    <Typography variant="body1" sx={{ color: 'orange' }}>{data.reason}</Typography>
                  </TableCell>
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
            justifyItems: 'center',
          }}>
          <CancleButton onClick={handlePrevious} sx={{ width: '150px', height: '40px', fontWeight: 'bold', color: 'white' }}>{ITEMS.REVIEW.REVIEW_FORTH}</CancleButton>
          <AisButton onClick={handleCreateVisitRecord} sx={{ width: '150px', height: '40px', fontWeight: 'bold', color: 'white' }}>{ITEMS.REVIEW.REVIEW_REGISTER}</AisButton>

        </Box>
      </TableContainer>
    </Grid>
    </div>
  )
})

export default ReviewStep
