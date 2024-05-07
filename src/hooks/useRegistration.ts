import { useState } from 'react'

const useRegistrationForm = () => {
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({

    visName:'',
    companyName:'',
    tel:'',
    numberWith:0,
    empNo:0,
    reason:'',
    checkIn:'',
    checkOut:''

  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      // 後でAPIと連結するコマンド
      // dispatch(submitRegistration(formData))
      console.log('Registration submitted successfully')
    } catch (error) {
      console.error('Error submitting registration:', error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // const handleNextPage = () => {
  // 次のページへ移動するロジック
  //   window.location.href = '/Registrationtext';
  // };


  return {
    formData,
    handleSubmit,
    handleChange,
  }
}

export default useRegistrationForm
