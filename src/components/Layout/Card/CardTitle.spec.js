import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CardTitle from './CardTitle';

describe('CardTitle component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<CardTitle> Foo </CardTitle>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-title.card-title')).to.exist;
  });

  it('should accept default classes', () => {
    const { container } = render(<CardTitle> Foo </CardTitle>);
    const titleCardComp = container.querySelector('h1');

    expect(titleCardComp.classList.contains('bi-title')).to.be.true;
    expect(titleCardComp.classList.contains('card-title')).to.be.true;
  });

  it('should accept custom classes', () => {
    const { container } = render(<CardTitle className="foo"> Foo </CardTitle>);
    const titleCardComp = container.querySelector('.bi-title.card-title');

    expect(titleCardComp.classList.contains('foo')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(<CardTitle textAlign="center">foo</CardTitle>);
    const titleCardComp = container.querySelector('.bi-title.card-title');

    expect(titleCardComp.classList.contains('text-align-center')).to.be.true;
  });

  it('should allow to change the title\'s color accepting a \'color\' prop', () => {
    const { container, rerender } = render(<CardTitle color="secondary">foo</CardTitle>);
    const titleCardComp = container.querySelector('.bi-title.card-title');

    expect(titleCardComp.classList.contains('bi-title-secondary')).to.be.true;

    rerender(<CardTitle>foo</CardTitle>);

    expect(titleCardComp.classList.contains('bi-title-secondary')).to.be.false;
  });
});
