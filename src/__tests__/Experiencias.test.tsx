import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experiencias from '../components/Experiencias';

describe('Experiencias', () => {
  it('renderiza el título Actualizar Experiencia', () => {
    render(<Experiencias onAgregar={() => {}} />);
    expect(screen.getByText('Actualizar Experiencia')).toBeInTheDocument();
  });
});
