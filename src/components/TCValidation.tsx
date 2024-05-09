import { useState } from 'react';
import InputMask from 'react-input-mask';
import cx from 'classnames';

const TCValidation = () => {
	const [error, setError] = useState<string | null>(null);
	
	const onChange = (e: any) => {
		const value = e.target.value.split('_').join('');

		let total = 0;
		for (let i = 0; i < 10; i++) {
			total += parseInt(value[i]);
		}

		if (total % 10 !== parseInt(value[10])) {
			setError('TC Kimlik No geçersiz!');
			return;
		}

		setError(null);
	}
	
	return (
		<div className={cx("form-control-ctr", {
			'error': error !== null
		})}>
			<InputMask type="tckn"
			className={`form-control ${error ? 'error-form-item' : ''}`} mask="99999999999" id="text" placeholder="TC Kimlik No" onChange={onChange} />
			{error && <span className="error-text">{error}</span>}
		</div>
	
	)
}

export default TCValidation;