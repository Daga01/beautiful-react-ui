import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from 'lodash/noop';
import Modal from '.';

describe('Modal component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should accept an "id" prop', () => {
    render(
      <Modal isOpen onToggle={noop} id="foo">
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    expect(modal.id).to.equal('foo');
  });

  it('should have default classes', () => {
    render(
      <Modal isOpen onToggle={noop}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi-modal-wrapper > div + div');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-modal']);
  });

  it('should allow to define custom style', () => {
    render(
      <Modal isOpen onToggle={noop} style={{ margin: '10px' }}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    expect(modal.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should have a backdrop', () => {
    render(
      <Modal isOpen onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const backdrop = document.querySelector('#bi-modals .modal-backdrop');
    expect(backdrop).to.exist;
  });

  it('should not render the modal component if the \'isOpen\' prop is set to false', () => {
    render(
      <Modal isOpen={false} onToggle={noop}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(document.querySelector('#bi-modals .bi.bi-modal')).to.not.exist;
  });

  it('should accept a \'centered\' prop', () => {
    render(
      <Modal isOpen onToggle={noop} centered>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-centered']);
  });

  it('should accept a \'size\' prop', () => {
    const { rerender } = render(
      <Modal isOpen onToggle={noop} size="small">
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-small']);

    rerender(
      <Modal isOpen onToggle={noop} size="large">
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-large']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-small']);

    rerender(
      <Modal isOpen onToggle={noop}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-large']);
  });


  it('should accept the \'animation\' prop', () => {
    const { rerender } = render(
      <Modal isOpen onToggle={noop} animation="scale">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-scale']);

    rerender(
      <Modal isOpen onToggle={noop} animation="slideTop">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-slideTop']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-scale']);

    rerender(
      <Modal isOpen onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-fade']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-slideTop']);
  });

  it('the \'onToggle\' required prop should be performed when close button is clicked', () => {
    const onToggleSpy = sinon.spy();

    render(
      <Modal isOpen onToggle={onToggleSpy}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    const modalCloseButton = modal.querySelector('.modal-button');

    fireEvent.click(modalCloseButton);

    expect(onToggleSpy.calledOnce).to.be.equal(true);
  });

  it('should render a custom backdrop if provided', () => {
    const CustomBackdrop = () => (
      <div className="custom-backdrop">
        Custom backdrop
      </div>
    );
    render(
      <Modal isOpen onToggle={noop} backdropRender={CustomBackdrop}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modalWrapper = document.querySelector('#bi-modals');
    const modalOriginalBackdrop = modalWrapper.querySelector('.modal-backdrop');
    expect(modalOriginalBackdrop).to.not.exist;

    const customBackdrop = modalWrapper.querySelector('.custom-backdrop');
    expect(customBackdrop).to.exist;
  });

  it('should perform the \'onClose\' callback, if provided, when closing the modal', () => {
    const onCloseSpy = sinon.spy();

    render(
      <Modal isOpen onClose={onCloseSpy} onToggle={noop}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modalCloseButton = document.querySelector('.modal-button');
    fireEvent.click(modalCloseButton);

    expect(onCloseSpy.calledOnce).to.be.equal(true);
  });

  it('should perform the \'onShow\' callback, if provided, when showing the modal', () => {
    const onShowSpy = sinon.spy();

    render(
      <Modal onToggle={noop} isOpen onShow={onShowSpy}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(onShowSpy.calledOnce).to.be.equal(true);
  });
});
