import React,{ memo, useMemo, useState } from 'react'
import {
  CCol,
  CForm,
  CFormGroup,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CTextarea,
  CContainer,
} from '@coreui/react'
const JobForm = memo(({props }) => {
    const [formData, setFormData] = useState({})
    const submit = () => {
        console.log(formData)
    }
return (
    <CModal
        show={props.show}
        onClose={props.onClose}
      >
        <CModalHeader closeButton>Job Form</CModalHeader>
        <CModalBody>
            <CContainer fluid>
            <CRow>
                <CCol sm="12">
                <CForm action="" method="post">
                    <CFormGroup>
                    <CLabel htmlFor="nf-code">Code</CLabel>
                    <CInput
                        type="text"
                        id="nf-code"
                        value={formData.code}
                    />
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="nf-cron">Cron</CLabel>
                    <CInput
                        type="text"
                        id="nf-cron"
                        placeholder="* * * * *"
                        value={formData.cron}
                    />
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="nf-type">Execute Type</CLabel>
                    <CSelect custom name="executeType" id="nf-type"
                        value={formData.executeType}>
                        <option value="WEB">WEB</option>
                        <option value="INTERNAL">INTERNAL</option>
                    </CSelect>
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="nf-url">URL</CLabel>
                    <CTextarea
                        type="text"
                        rows="3"
                        id="nf-url"
                        value={formData.url}
                    />
                    </CFormGroup>
                </CForm>
                </CCol>
            </CRow>
            </CContainer>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={submit}>Submit</CButton>{' '}
          <CButton
            color="secondary"
            onClick={props.onClose}
          >Cancel</CButton>
        </CModalFooter>
      </CModal>
    
  )
})

export default JobForm