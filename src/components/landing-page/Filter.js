import React from 'react';

const Filter = ({
  keywordFilterCityChange,
  keywordFilterCompanyChange,
  keywordFilterMinSalaryChange,
}) => {
  return (
    <div>
      <div className="form-control select-sm max-w-xs mt-5 mx-auto mb-[10rem] md:mb-[2rem] ">
        <div className="flex flex-col gap-2 md:flex md:flex-row md:justify-center mb-5 ">
          <select
            className="select select-bordered text-sm dark:bg-gray-700 dark:text-gray-400"
            onChange={(event) => keywordFilterCityChange(event.target.value)}
          >
            <option value="" className="font-bold">
              -- Filter by City --
            </option>
            <option value="">All City</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Surabaya">Surabaya</option>
            <option value="Medan">Medan</option>
            <option value="Palembang">Palembang</option>
            <option value="Magelang">Magelang</option>
            <option value="Solo">Solo</option>
            <option value="Bogor">Bogor</option>
            <option value="Padang">Padang</option>
            <option value="Jogjakarta">Jogjakarta</option>
          </select>

          <select
            className="select select-bordered text-sm dark:bg-gray-700 dark:text-gray-400"
            onChange={(event) => keywordFilterCompanyChange(event.target.value)}
          >
            <option value="" className="font-bold">
              -- Filter by Company --
            </option>
            <option value="">All Company</option>
            <option value="Gojek">Gojek</option>
            <option value="Tokopedia">Tokopedia</option>
            <option value="Shopee">Shopee</option>
            <option value="Grab">Grab</option>
            <option value="Bukalapak">Bukalapak</option>
            <option value="PT. Telkom">PT. Telkom</option>
            <option value="Glints">Glints</option>
            <option value="Tik-Tok">Tik-Tok</option>
            <option value="Dicoding">Dicoding</option>
            <option value="Sanbercode">Sanbercode</option>
          </select>

          <select
            className="select select-bordered text-sm dark:bg-gray-700 dark:text-gray-400"
            onChange={(event) =>
              keywordFilterMinSalaryChange(event.target.value)
            }
          >
            <option value={0} className="font-bold">
              -- Filter by Minimal Salary --
            </option>
            <option value={0}>All Minimal Salary</option>
            <option value={1000000}>Rp 1.000.000,00</option>
            <option value={2000000}>Rp 2.000.000,00</option>
            <option value={3000000}>Rp 3.000.000,00</option>
            <option value={4000000}>Rp 4.000.000,00</option>
            <option value={5000000}>Rp 5.000.000,00</option>
            <option value={6000000}>Rp 6.000.000,00</option>
            <option value={7000000}>Rp 7.000.000,00</option>
            <option value={8000000}>Rp 8.000.000,00</option>
            <option value={9000000}>Rp 9.000.000,00</option>
            <option value={10000000}>Rp 10.000.000,00</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
