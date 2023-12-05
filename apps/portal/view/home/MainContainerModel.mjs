import Component from '../../../../src/model/Component.mjs';
import Store     from '../../store/Content.mjs';

/**
 * @class Portal.view.home.MainContainerModel
 * @extends Neo.model.Component
 */
class MainContainerModel extends Component {
    static config = {
        /**
         * @member {String} className='Portal.view.home.MainContainerModel'
         * @protected
         */
        className: 'Portal.view.home.MainContainerModel',
        /**
         * @member {Object} data
         */
        data: {},
        /**
         * @member {Object} stores
         */
        stores: {
            tree: {
                module      : Store,
                responseRoot: 'data'
            }
        }
    }
}

Neo.applyClassConfig(MainContainerModel);

export default MainContainerModel;
