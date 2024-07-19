import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createPracticeList,
  practiceSelector,
} from 'redux/modules/practice'

const usePractice = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(practiceSelector)
  const {practiceList } = employeeState

  const onCreatePracticeList = () => {
    dispatch(createPracticeList())
  }

  return {
    onCreatePracticeList,
    practiceList,
  }
}

export default usePractice
