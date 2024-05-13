import React, { useEffect } from 'react'

// material-ui
import { Typography, TextField, Button, Box, Grid } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import type { SubmitHandler } from 'react-hook-form'
import type { VisitRecord, FormStep } from 'types/visitRecord'
import Link from 'next/link'

interface InputStepProps {
  step: FormStep
  defaultValues: VisitRecord
  onPrevious: () => void
  onNext: () => void
  onUpdateStep: (index: number, step: FormStep) => void
}

const InputStep = React.forwardRef<HTMLButtonElement, InputStepProps>(({ step, defaultValues, onNext, onUpdateStep }) => {
  const schema = yup.object({
    visNo: yup
      .number()
      .typeError("error message")
      .required("error message"),
    visName: yup
      .string()
      .typeError("error message")
      .required("error message"),
    companyName: yup
      .string()
      .typeError("error message")
      .required("error message"),
    tel: yup
      .string()
      .typeError("error message")
      .required("error message"),
    numberWith: yup
      .number()
      .typeError("数字を入力してください。")
      .min(0, "0から9,999までの数字を入力してください")
      .max(9999, "0から9,999までの数字を入力してください")
      .required("入力してください。"),
    isHost: yup
      .boolean()
      .typeError("error message")
      .required("error message"),
    empNo: yup
      .number()
      .typeError("error message")
      .required("error message"),
    reason: yup
      .string()
      .typeError("error message")
      .required("error message"),
    checkIn: yup
      .string()
      .typeError("error message")
      .required("error message"),
    checkOut: yup
      .string()
      .typeError("error message")
      .required("error message"),
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<VisitRecord>({
    mode: 'all',
    resolver: yupResolver<VisitRecord>(schema),
    defaultValues: step.data
      ? {
        visNo: step.data.visNo,
        visName: step.data.visName,
        companyName: step.data.companyName,
        tel: step.data.tel,
        numberWith: step.data.numberWith,
        isHost: step.data.isHost,
        empNo: step.data.empNo,
        reason: step.data.reason,
        checkIn: step.data.checkIn,
        checkOut: step.data.checkOut,
      }
      : defaultValues,
  })

  const onSubmit: SubmitHandler<VisitRecord> = (data) => {
    onUpdateStep(0, {
      ...step,
      error: false,
      completed: true,
      data,
    })
    onNext()
  }

  useEffect(() => {
    onUpdateStep(0, {
      ...step,
      error: !isValid,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'grid', gap: 2, justifyContent: 'center' }}>

        <Grid item xs={12} mt={3}>
          <Typography variant="h5">
            基本情報
          </Typography>
        </Grid>

        <Typography sx={{ fontWeight: 'bold', mt: 3 }}>お名前</Typography>
        <TextField
          fullWidth
          {...register('visName')}
          error={'visName' in errors}
          helperText={errors.visName?.message}
        />
        <Typography sx={{ fontWeight: 'bold', mt: 3 }}>会社名</Typography>
        <TextField
          fullWidth
          {...register('companyName')}
          error={'companyName' in errors}
          helperText={errors.companyName?.message}
        />
        <Typography sx={{ fontWeight: 'bold', mt: 3 }}>連絡先（電話番号）</Typography>
        <TextField
          fullWidth
          {...register('tel')}
          error={'tel' in errors}
          helperText={errors.tel?.message}
        />
        <Typography sx={{ fontWeight: 'bold', mt: 3 }}>同行人数</Typography>
        <TextField
          fullWidth
          {...register('numberWith')}
          error={'numberWith' in errors}
          helperText={errors.numberWith?.message}
        />

        <Grid item xs={12} mt={3}>
          <Typography variant="h5">
            ご用件
          </Typography>
        </Grid>

        <Typography sx={{ fontWeight: 'bold', mt: 3 }}>面会者</Typography>
        <TextField
          fullWidth
          {...register('empNo')}
          error={'empNo' in errors}
          helperText={errors.empNo?.message}
        />
        <Typography sx={{ fontWeight: 'bold', mt: 3 }}>ご用件</Typography>
        <TextField
          fullWidth
          {...register('reason')}
          error={'reason' in errors}
          helperText={errors.reason?.message}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Link href="/agreement">
        <Button sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>キャンセル</Button>
        </Link>
        <Button type="submit" sx={{ width: '200px', height: '40px', fontWeight: 'bold' }}>次へ</Button>
      </Box>

    </form>
  )
})

export default InputStep
