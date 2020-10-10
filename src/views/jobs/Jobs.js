import React, { useState, useMemo, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CButtonGroup,
  CPagination
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import JobForm from './JobForm'

import jobsData from './JobsData'
const getBadge = status => {
  switch (status) {
    case 1: return 'success'
    case 0: return 'danger'
    default: return 'primary'
  }
}
const getStatus = status => {
  switch (status) {
    case 1: return 'Running'
    case 0: return 'Paused'
  }
}
const Jobs = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [modal, setModal] = useState(false);

  const onClose = ()=>{
    setModal(!modal);
  }

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/jobs?page=${newPage}`)
  }

  const data = useMemo(()=>{
    return {
        show: modal,
        onClose,

    }
  },[modal, onClose])

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <>
    <JobForm 
      props={data}/>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Jobs &nbsp;
            <CButton
              color="primary"
              size="sm"
              onClick={onClose}
            >
              Create
            </CButton>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={jobsData}
            fields={[
              { key: 'code', _classes: 'font-weight-bold' },
              'cron', 'executeType', 'url', 'status',
              {
                key: 'actions',
                label: 'Actions',
                _style: { width: '15%' },
                sorter: false,
                filter: false
              }
            ]}
            hover
            striped
            itemsPerPage={20}
            activePage={page}
            clickableRows
            // onRowClick={(item) => history.push(`/jobs/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {getStatus(item.status)}
                    </CBadge>
                  </td>
                ),
              'actions':
                (item, index)=>{
                  return (
                    <td className="py-2">
                      <CButtonGroup>
                      <CButton
                        color="primary"
                        variant="outline"
                        size="sm"
                        onClick={()=>{ alert(1)}}
                      >
                        {
                          item.status == 1? <CIcon size='sm' content={freeSet['cilMediaPause']}></CIcon>: <CIcon size='sm' name={freeSet['cilMediaPlay']}></CIcon>
                        }
                      </CButton>
                      <CButton
                        color="primary"
                        variant="outline"
                        size="sm"
                        onClick={()=>{ alert(2)}}
                      >
                         <CIcon size={'sm'} content={freeSet['cilBolt']} />
                      </CButton>
                      </CButtonGroup>
                    </td>
                    )
                },
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={Math.ceil(jobsData.length/20)}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default Jobs
