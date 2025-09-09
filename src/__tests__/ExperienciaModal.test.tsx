import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienciaModal from '../components/ExperienciaModal';

describe('ExperienciaModal', () => {
  it('no renderiza nada si show es false', () => {
    const { container } = render(<ExperienciaModal show={false} onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renderiza el modal si show es true', () => {
    const { getByText } = render(<ExperienciaModal show={true} onClose={() => {}} />);
    expect(getByText('INFORMACIÓN DE LA EXPERIENCIA')).toBeInTheDocument();
  });

  it('llama a onClose al hacer click en el botón de cerrar', () => {
    const onCloseMock = vi.fn();
    const { getByLabelText } = render(<ExperienciaModal show={true} onClose={onCloseMock} />);
    fireEvent.click(getByLabelText('Cerrar'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
