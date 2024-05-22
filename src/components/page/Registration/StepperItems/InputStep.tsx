import React, { SyntheticEvent, useEffect, useState } from 'react'

// material-ui
import { Typography, Box, Grid, Autocomplete } from '@mui/material'

import 'styles/common.css'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import type { VisitRecord, FormStep } from 'types/visitRecord'

import { Employee } from 'types/employee'
import { AisButton, CancleButton, OrangeTextField } from 'styles/muStyle'
import { useEmployee } from 'hooks'

interface InputStepProps {
  step: FormStep
  defaultValues: VisitRecord
  onPrevious: () => void
  onNext: () => void
  onCancle: () => void
  onUpdateStep: (index: number, step: FormStep) => void
}

const InputStep = React.forwardRef<HTMLButtonElement, InputStepProps>(({ step, defaultValues, onNext, onCancle, onUpdateStep }) => {

  const { employeeList, onCreateEmployeeList } = useEmployee()

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

  const [comboValue, setComboValue] =
    useState<Employee | undefined>(
      step.data?.empNo ? employeeList.find(employee => employee.empNo === step.data?.empNo) : undefined)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputValue(value)
  }

  const handleOptionSelect = (option: Employee | null) => {
    if (option) {
      setComboValue(option)
      setInputValue(`${option.lastName} ${option.firstName}`)
    } else {
      setComboValue(undefined)
      setInputValue('')
    }
  }

  const {
    setValue,
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

  useEffect(() => {
    onCreateEmployeeList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue('empNo', comboValue?.empNo)
  }, [comboValue, setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Grid item xs={12} mt={3}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#ff3300' }}>
            基本情報
          </Typography>
        </Grid>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>お名前</Typography>
        <OrangeTextField
          fullWidth
          {...register('visName')}
          error={'visName' in errors}
          helperText={errors.visName?.message}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>会社名</Typography>
        <OrangeTextField
          fullWidth
          {...register('companyName')}
          error={'companyName' in errors}
          helperText={errors.companyName?.message}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>連絡先（電話番号）</Typography>
        <OrangeTextField
          fullWidth
          {...register('tel')}
          error={'tel' in errors}
          helperText={errors.tel?.message}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>同行人数</Typography>
        <OrangeTextField
          fullWidth
          {...register('numberWith')}
          error={'numberWith' in errors}
          helperText={errors.numberWith?.message}
        />
        <Grid item xs={12} mt={3}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#ff3300' }}>
            ご用件
          </Typography>
        </Grid>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>面会者</Typography>
        <Autocomplete
          value={comboValue}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={(event, newValue) => handleOptionSelect(newValue)}
          options={employeeList}
          getOptionLabel={(option: Employee) => {
            const { lastName, firstName, lastKanaName, firstKanaName } = option
            return `${lastName} ${firstName} (${lastKanaName} ${firstKanaName})`
          }}
          renderInput={(params) => <OrangeTextField {...params} />}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>ご用件</Typography>
        <OrangeTextField
          fullWidth
          {...register('reason')}
          error={'reason' in errors}
          helperText={errors.reason?.message}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <CancleButton onClick={onCancle} variant="contained" sx={{ width: '200px', height: '50px', fontWeight: 'bold' }}>キャンセル</CancleButton>
        <AisButton type="submit" variant="contained" sx={{ width: '200px', height: '50px', fontWeight: 'bold' }}>次へ</AisButton>
      </Box>

    </form>
  )
})

export default InputStep
