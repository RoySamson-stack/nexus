use opendp::trans::make_count;
use opendp::data::naturals;

pub fn example_differential_privacy() -> Result<(), String> {
    let count = make_count::<u32>()?;
    let data = naturals();
    let result = count.invoke(&data);
    Ok(())
}
