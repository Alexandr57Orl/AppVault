import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../hooks/useModal';
type Props = { children: ReactNode; onClose: () => void };
export default function Modal({ children, onClose }: Props) {
  const { dialogRef, closeRef } = useModal(onClose);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          className="modal-close icon-button"
          aria-label="Закрыть"
          onClick={onClose}
        >
          <X />
        </button>
        {children}
      </section>
    </div>
  );
}
