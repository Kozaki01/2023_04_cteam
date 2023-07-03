import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

interface props {}

const MultiSelect: React.FC<props> = ({}) => {
  const [warna, setWarna] = useState([]);
  const [ukuran, setUkuran] = useState([]);
  const optionsWarna = [
    { value: 'biru', label: 'Biru' },
    { value: 'kuning', label: 'Kuning' },
    { value: 'hijau', label: 'Hijau' },
    { value: 'cokelat', label: 'Cokelat' },
    { value: 'merah', label: 'Merah' },
    { value: 'biru1', label: 'Biru1' },
    { value: 'kuning1', label: 'Kuning1' },
    { value: 'hijau1', label: 'Hijau1' },
    { value: 'cokelat1', label: 'Cokelat1' },
    { value: 'merah1', label: 'Merah1' },
    { value: 'biru2', label: 'Biru2' },
    { value: 'kuning2', label: 'Kuning2' },
    { value: 'hijau2', label: 'Hijau2' },
    { value: 'cokelat2', label: 'Cokelat2' },
    { value: 'merah2', label: 'Merah2' },
  ];

  const optionsUkuran = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ];

  const handleWarnaChange = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    // console.log(`action ${action}`);
    if (action === 'clear') {
    } else if (action === 'select-option') {
    } else if (action === 'remove-value') {
      console.log('remove');
    }
    setWarna(selected);
  };

  const handleUkuranChange = async (selected: any, selectaction: any) => {
    // const { action } = selectaction;
    setUkuran(selected);
  };

  return (
    <div>
      <Select
        id="selectWarna"
        instanceId="selectWarna"
        isMulti
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        options={optionsWarna}
        onChange={handleWarnaChange}
        placeholder="希望の地域を選択してください。"
      />
      {/* <Select
        id="selectUkuran"
        instanceId="selectUkuran"
        isMulti
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        options={optionsUkuran}
        onChange={handleUkuranChange}
      /> */}
    </div>
  );
};

export default MultiSelect;
