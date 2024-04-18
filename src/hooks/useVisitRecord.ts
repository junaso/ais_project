import { fetchVisitRecordList, visitRecordSelector } from 'redux/modules/visitRecord'
import { useDispatch, useSelector } from 'redux/store'

const useVisitRecord = () => {
    const dispatch = useDispatch()
    const visitRecordState = useSelector(visitRecordSelector)
    const {visitRecordList} = visitRecordState

    const onSearchVisitRecordList = async () => {
        dispatch(fetchVisitRecordList())
    }

    return { onSearchVisitRecordList, visitRecordList}
}

export default useVisitRecord