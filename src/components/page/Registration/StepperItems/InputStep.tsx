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
import { ITEMS } from 'constant/items'

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

  const [comboValue, setComboValue] =
    useState<Employee | undefined>(
      step.data?.empNo ? employeeList.find(employee => employee.empNo === step.data?.empNo) : undefined)
  const [inputValue, setInputValue] = useState('')

  const schema = yup.object({
    visNo: yup
      .number()
      .typeError("error message")
      .required("error message"),
    visName: yup
      .string()
      .typeError("日本語・ローマ字を使って入力してください。")
      .matches(/^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF A-Za-z]+$/, "日本語・ローマ字を使って入力してください。")
      .max(256, "256文字までの文字を入力できます。")
      .required("お名前を入力してください。"),
    companyName: yup
      .string()
      .typeError("会社名を入力してください。")
      .max(256, "256文字までの文字を入力できます。"),
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
      .typeError("error message"),
    reason: yup
      .string()
      .typeError("ご用件をを入力してください。")
      .max(9999, "9999文字まで入力できます。"),
    checkIn: yup
      .string()
      .typeError("error message"),
    checkOut: yup
      .string()
      .typeError("error message")
  })

  const handleInputChange = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {

    if (!value) {
      setComboValue(undefined)
    }

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
        companyName: step.data.companyName ?? undefined,
        tel: step.data.tel,
        numberWith: step.data.numberWith,
        isHost: step.data.isHost,
        empNo: step.data.empNo ?? undefined,
        reason: step.data.reason ?? undefined,
        checkIn: step.data.checkIn ?? undefined,
        checkOut: step.data.checkOut ?? undefined,
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

    if (comboValue) {
      setValue('empNo', comboValue?.empNo)
      setValue('isHost', true)
    } else {
      setValue('empNo', undefined)
      setValue('isHost', false)
    }

  }, [comboValue, setValue])


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Grid item xs={12} mt={3}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#ff3300' }}>
            {ITEMS.INPUT.INPUT_BACIC}
          </Typography>
        </Grid>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>{ITEMS.INPUT.INPUT_NAME}</Typography>
        <OrangeTextField
          fullWidth
          {...register('visName')}
          error={'visName' in errors}
          helperText={errors.visName?.message}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>{ITEMS.INPUT.INPUT_COMPANY}</Typography>
        <OrangeTextField
          fullWidth
          {...register('companyName')}
          error={'companyName' in errors}
          helperText={errors.companyName?.message}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>{ITEMS.INPUT.INPUT_CONTACT}</Typography>
        <OrangeTextField
          fullWidth
          {...register('tel')}
          error={'tel' in errors}
          helperText={errors.tel?.message}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>{ITEMS.INPUT.INPUT_COMPANION}</Typography>
        <OrangeTextField
          fullWidth
          {...register('numberWith')}
          error={'numberWith' in errors}
          helperText={errors.numberWith?.message}
        />
        <Grid item xs={12} mt={3}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#ff3300' }}>
            {ITEMS.INPUT.INPUT_BUSINESS}
          </Typography>
        </Grid>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>{ITEMS.INPUT.INPUT_VISITORS}</Typography>
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
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, color: '#EEA47F' }}>{ITEMS.INPUT.INPUT_BUSINESS}</Typography>
        <OrangeTextField
          id="outlined-multiline-static"
          rows={5}
          multiline
          fullWidth
          {...register('reason')}
          error={'reason' in errors}
          helperText={errors.reason?.message}

        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <CancleButton onClick={onCancle} variant="contained">{ITEMS.INPUT.INPUT_CANCEL}</CancleButton>
        <AisButton type="submit" variant="contained">{ITEMS.INPUT.INPUT_NEXT}</AisButton>
      </Box>
    </form>
  )
})

export default InputStep
