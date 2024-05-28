import React from 'react'

import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import type { FormStep, VisitRecord } from 'types/visitRecord'

import 'styles/reviewStep.css'
import { ITEMS } from 'constant/items'
import { AisButton, CancleButton, } from 'styles/muStyle'
import ScrollTop from 'components/organisms/ScrollTop'
import { useEmployee } from 'hooks'

interface ReviewStepProps {
  data: VisitRecord | undefined
  onNext: () => void
  onUpdateStep: (index: number, step: FormStep) => void
  onUpdateData: (data: VisitRecord) => void
  onPrevious: () => void
}

const ReviewStep = React.forwardRef<HTMLButtonElement, ReviewStepProps>(({ data, onNext, onUpdateData, onPrevious }) => {

  const { employeeList } = useEmployee()

  const foundEmployee = employeeList.find(employee => employee.empNo === data?.empNo ? data.empNo : undefined)

  const handleCreateVisitRecord = async () => {

    if (data) {
      if (foundEmployee) {
        onUpdateData(data)
        const formData = new FormData()
        formData.append('to', foundEmployee.mail)
        formData.append('subject', ITEMS.REGISTER_MAIL.SEND_MAIL_SUBJECT)
        formData.append('text', ITEMS.REGISTER_MAIL.SEND_MAIL_TEXT)
        try {
          await fetch('/api/send-mail', {
            method: 'POST',
            body: formData
          }).then(res => res.json())
        } catch (error) {
          console.error('error', error)
        }
      } else {
        onUpdateData(data)
      }
    }

    onNext()
  }

  const handlePrevious = () => {
    onPrevious()
  }

  return (
    <ScrollTop>
      <Grid sx={{ backgroundColor: '#FFF3E2', minHeight: '100vh', padding: '20px' }}>
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
                    <TableCell><Typography variant="body1" sx={{ color: 'orange' }}>
                      {foundEmployee ? `${foundEmployee.lastName} ${foundEmployee.firstName}` : '指定なし'}</Typography></TableCell>
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
            <CancleButton onClick={handlePrevious} >{ITEMS.REVIEW.REVIEW_FORTH}</CancleButton>
            <AisButton onClick={handleCreateVisitRecord} >{ITEMS.REVIEW.REVIEW_REGISTER}</AisButton>

          </Box>
        </TableContainer>
      </Grid>
    </ScrollTop>
  )
})

export default ReviewStep
