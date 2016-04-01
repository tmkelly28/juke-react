'use strict';

import React from 'react';
import FormInputMixin from '../../mixins/form-input-mixin';
import actions from '../../actions/auth-actions';

export default FormInputMixin('Signup', actions.signup);
