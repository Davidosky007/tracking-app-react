import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Icon from '../../Components/Icon';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'example.com/test',
  }),
}));

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Icon
          path=""
          title=""
          clickHandler={() => {}}
          icon=""
        />
      </BrowserRouter>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
