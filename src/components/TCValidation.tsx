import { useState } from 'react';
import InputMask from 'react-input-mask';
import cx from 'classnames';

const TCValidation = () => {
	const [error, setError] = useState<string | null>(null);
	
	const onChange = (e: any) => {
		const value = e.target.value.split('_').join('');

		if (value === '') {
			setError('TC Kimlik No boş bırakılamaz!');
			return;
		}

		if (value.length !== 11) {
			setError('TC Kimlik No 11 haneli olmalıdır!');
			return;
		}

		if (value[0] === '0') {
			setError('TC Kimlik No 0 ile başlayamaz!');
			return;
		}

		let total = 0;
		for (let i = 0; i < 10; i++) {
			total += parseInt(value[i]);
		}

		if (total % 10 !== parseInt(value[10])) {
			setError('TC Kimlik No geçersiz!');
			return;
		}

		setError(null);

		console.log('TC Kimlik No: ' + value);
	}
	
	return (
		<div className={cx("form-control-ctr", {
			'error': error !== null
		})}>
			<InputMask type="tckn"  className={`form-control ${error ? 'error-form-item' : ''}`} mask="99999999999" id="text" placeholder="TC Kimlik No" onChange={onChange} />
			{error && <small className="error-msg">{error}</small>}
		</div>
	)
}

export default TCValidation;