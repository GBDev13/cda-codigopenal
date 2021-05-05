import * as S from './ModalStyles';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/types';
import { useCallback } from 'react';
import { fecharModalConfirmação, setCurrentItem } from '../../store/modal';
import { removerCodigo } from '../../store/codigos';
import { useToasts } from 'react-toast-notifications';

function ModalConfirmacao() {
  Modal.setAppElement('#root')

  const { modal } = useSelector((state): IState => state);
  const isOpen = modal?.isConfirmationOpen || false;

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleClose = useCallback(() => {
    dispatch(fecharModalConfirmação())
    dispatch(setCurrentItem({}))
  }, [dispatch])

  const handleConfirm = useCallback(async () => {
    const current = modal?.currentItem
    try {
      // Os comentários abaixo são por conta da Fake API não manter os dados criados, assim
      // ao tentar remover um código recém criado causava um erro. (Não encontrava o id novo na API)
      // await api.delete(`/codigopenal/${current?.id}`);
      dispatch(removerCodigo(current?.id));
      addToast('O item foi removido com sucesso.', { appearance: 'success', autoDismiss: true });
      handleClose()
    } catch {
      addToast('Ocorreu um erro ao tentar remover este item.', { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, dispatch, handleClose, modal?.currentItem])

  return (
    <S.ContainerConfirmacao
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: {
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(29, 29, 27, 0.7)'
        }
      }}
    >
      <section>
        <p>Você tem certeza que deseja remover esse item? <b>(Essa ação é irreversível)</b></p>
      </section>
      <div>
        <button onClick={handleClose}>cancelar</button>
        <button className="confirmar" onClick={handleConfirm}>confirmar</button>
      </div>
    </S.ContainerConfirmacao>
  );
};

export default ModalConfirmacao;
