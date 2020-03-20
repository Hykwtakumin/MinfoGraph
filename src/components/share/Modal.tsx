import * as React from "react";
import { FC } from "react";
import cx from "classnames";
import { Case } from "./Case";

export type ModalType = "success" | "info" | "warning" | "error" | "confirm";

type ModalProps = {
  type?: ModalType;
  title: string | React.ReactNode;
  content?: string | React.ReactNode;
  okText?: string;
  cancelText?: string;
  noCancel?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  onClickBackground?: () => void;
  width?: string;
  height?: string;
};

export type ShowModal = (modalProps: ModalProps) => void;

export const ModalContext = React.createContext<{ showModal: ShowModal }>({
  showModal: (modalProps: ModalProps) => {}
});

/*Modal Window*/
export const Modal: FC<ModalProps> = props => {
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const defaultProps: ModalProps = {
    type: "info",
    title: "",
    content: "",
    okText: "OK",
    cancelText: "Cancel",
    noCancel: false,
    onOk: () => {},
    onCancel: () => {},
    onClickBackground: () => {},
    width: "90%",
    height: "auto"
  };

  const modal = React.useRef<ModalProps>({
    ...defaultProps
  });

  const showModal = (props: ModalProps) => {
    if (isShow) return;
    modal.current = { ...defaultProps, ...props };
    setIsShow(true);
  };

  const onClickOk = React.useCallback(() => {
    modal.current.onOk();
    setIsShow(false);
  }, []);

  const onClickCancel = React.useCallback(() => {
    modal.current.onCancel();
    setIsShow(false);
  }, []);

  const onClickBackground = React.useCallback(() => {
    modal.current.onClickBackground();
    setIsShow(false);
  }, []);

  return (
    <>
      <ModalContext.Provider value={{ showModal }}>
        {props.children}
      </ModalContext.Provider>
      <Case condition={isShow === true}>
        <section
          className="mg-modal"
          style={{
            width: modal.current.width,
            height: modal.current.height
          }}
        >
          <header className="mg-modal-header"></header>

          <Case condition={modal.current.content !== null}>
            <section className="mg-modal-content">
              {modal.current.content}
            </section>
          </Case>

          <footer className="mg-modal-footer"></footer>
        </section>

        <section className="mg-modal-overlay" onClick={onClickBackground} />
      </Case>
    </>
  );
};

export const useModal = () => React.useContext(ModalContext);
