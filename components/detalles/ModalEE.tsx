import { closeModal } from '@/redux/features/modalEE-slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import Image from 'next/image'

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: '#F8F7F3',
    zIndex: 1
  }
}

const ModalEE: React.FC = () => {
  const isModalOpen = useSelector((state: any) => state.modal.isOpen)
  const dispatch = useDispatch()

  const handleCloseModal = (): void => {
    dispatch(closeModal())
    window.location.href = '/signin'
  }
  const handleClose = (): void => {
    dispatch(closeModal())
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Modal 1"
    >  <button
      className="text-gray font-poppins text-3xl font-bold rounded-xl ml-auto"
      onClick={handleClose}
    >  X
      </button>
      <Image
        src="/logoModal.svg"
        alt="logo"
        width={76}
        height={70}
        className='mb-8'
      />
      <h2 className="font-poppins text-2xl font-medium leading-10 text-center mb-6 text-gray-900">
        Es necesario iniciar sesión
      </h2>
      <button
        className="text-white font-poppins text-base font-medium w-[240px] rounded-xl h-10 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93]"
        onClick={handleCloseModal}
      >  Ok
      </button>
    </Modal>
  )
}

export default ModalEE
