import React, { useEffect } from 'react'

import { Grid } from '@mui/material'

import 'styles/common.css'
import Test from './Test'
import { usePractice } from 'hooks'

const Practice = () => {

  const { onCreatePracticeList, practiceList } = usePractice()

  useEffect(() => {
    onCreatePracticeList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <Grid>
        <Test list={practiceList}></Test>
      </Grid>
  )
}

export default Practice
