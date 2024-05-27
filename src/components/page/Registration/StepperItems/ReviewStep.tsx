import React from 'react'

import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import type { FormStep, VisitRecord } from 'types/visitRecord'

import 'styles/reviewStep.css'
import { ITEMS } from 'constant/items'
import { Employee } from 'types/employee'

interface ReviewStepProps {
  data: VisitRecord | undefined
  onNext: () => void
  onUpdateStep: (index: number, step: FormStep) => void
  onUpdateData: (data: VisitRecord) => void
  onPrevious: () => void
  employeeList: Employee[]
}

const ReviewStep = React.forwardRef<HTMLButtonElement, ReviewStepProps>(({ data, onNext, onUpdateData, onPrevious, employeeList }) => {

  const handleCreateVisitRecord = async () => {

    if (data && employeeList) {
      const foundEmployee = employeeList.find(employee => employee.empNo === data.empNo)
      console.log('found employee:', foundEmployee)
      console.log('found email:', foundEmployee?.mail)

      if(foundEmployee){
        onUpdateData(data)

        const formData = new FormData()
        formData.append('to',foundEmployee.mail)
        formData.append('subject', ITEMS.REGISTER_MAIL.SEND_MAIL_SUBJECT)
        formData.append('text',ITEMS.REGISTER_MAIL.SEND_MAIL_TEXT)

        try {
          const response = await fetch('/api/send-mail',{
            method: 'POST',
            body:formData
          }).then(res=>res.json())

          console.log(response,"aaaaaaaa")

        } catch (error) {
          console.error('error', error)
        }
      }
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
            justifyItems: 'center'
          }}>
          <Button onClick={handlePrevious} sx={{ width: '150px', height: '40px', fontWeight: 'bold' }}>前へ</Button>
          <Button onClick={handleCreateVisitRecord} sx={{ width: '150px', height: '40px', fontWeight: 'bold' }}>登録</Button>
        </Box>
      </TableContainer>
    </Grid>
  )
})

export default ReviewStep
