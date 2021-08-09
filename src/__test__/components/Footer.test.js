import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../../Components/Footer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'example.com/test',
  }),
}));

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
