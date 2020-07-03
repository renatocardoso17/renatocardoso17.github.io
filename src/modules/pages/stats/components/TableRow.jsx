import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({label, link, value}) => (
    <tr>
        <td>{label}</td>
        <td width="150px">{link.length ? (<a href={link}>{value}</a>) : value}</td>
    </tr>
);

TableRow.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    link: PropTypes.string,
};

TableRow.defaultProps = {
    link: '',
};

export default TableRow;
