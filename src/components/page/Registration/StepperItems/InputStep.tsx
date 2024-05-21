import React, { SyntheticEvent, useEffect, useState } from 'react'

// material-ui
import { Typography, TextField, Button, Box, Grid, Autocomplete } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import type { VisitRecord, FormStep } from 'types/visitRecord'
import Link from 'next/link'

import { mockFormData } from 'mocks/employeeMock'
import { Employee } from 'types/Employee'

interface InputStepProps {
  step: FormStep
  defaultValues: VisitRecord
  onPrevious: () => void
  onNext: () => void
  onUpdateStep: (index: number, step: FormStep) => void
  onSelectedEmployeeChange: (empNo: number | null) => void // 새로운 prop 추가
  selectedEmployeeEmpNo: number | null
}

const InputStep = React.forwardRef<HTMLButtonElement, InputStepProps>(({ step, defaultValues, onNext, onUpdateStep, onSelectedEmployeeChange  }) => {
  const schema = yup.object({
    visNo: yup
      .number()
      .typeError("error message")
      .required("error message"),
    visName: yup
      .string()
      .typeError("漢字・ローマ字・ひらがなを使って入力してください。")
      .matches(/^[\u3040-\u309F\u4E00-\u9FAF A-Za-z]+$/, "漢字・ローマ字・ひらがなを使って入力してください。")
      .max(256, "256文字までの文字を入力できます。")
      .required("お名前を入力してください。"),
    companyName: yup
      .string()
      .typeError("会社名を入力してください。")
      .max(256, "256文字までの文字を入力できます。")
      .nullable()
      .notRequired(),
    tel: yup
      .string()
      .typeError("電話番号を数字と(-)で入力して下さい。")
      .matches(/^\d{2,3}-\d{4}-\d{4}$/, "電話番号を数字と(-)で入力して下さい。")
      .required("電話番号を入力してください。"),
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
      .nullable()
      .notRequired(),
    reason: yup
      .string()
      .typeError("ご用件をを入力してください。")
      .max(9999, "9999文字まで入力できます。")
      .nullable()
      .notRequired(),
    checkIn: yup
      .string()
      .typeError("error message")
      .required("error message"),
    checkOut: yup
      .string()
      .typeError("error message")
      .nullable()
      .notRequired(),
  })

  const [value, setValue] = useState<Employee | null>(null)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value)
  }

  const handleOptionSelect = (option: Employee | null) => {
    if (option) {
      setValue(option)
      setInputValue(`${option.lastName} ${option.firstName}`)
      onSelectedEmployeeChange(option.empNo) // 選択した面会者のempNoを送る
      console.log("Selected Employee's empNo:", option.empNo)
    } else {
      setValue(null)
      setInputValue('')
      onSelectedEmployeeChange(null) // 選択解除、選択しないとnullを送る
      console.log("Selected Employee's empNo: null")
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<VisitRecord>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: step.data
      ? {
        visNo: step.data.visNo,
        visName: step.data.visName,
        companyName: step.data.companyName ?? null,
        tel: step.data.tel,
        numberWith: step.data.numberWith,
        isHost: step.data.isHost,
        empNo: step.data.empNo ?? null,
        reason: step.data.reason ?? null,
        checkIn: step.data.checkIn,
        checkOut: step.data.checkOut ?? null,
      }
      : defaultValues,
  })

  const onSubmit = (data: VisitRecord) => {
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
        <Autocomplete
          value={value}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={(event, newValue) => handleOptionSelect(newValue)}
          options={mockFormData}
          getOptionLabel={(option: Employee) => {
            const { lastName, firstName, lastKanaName, firstKanaName } = option
            return `${lastName} ${firstName} (${lastKanaName} ${firstKanaName})`
          }}
          renderInput={(params) => <TextField {...params} />}
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
