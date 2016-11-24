#[cfg(feature = "be-portaudio")]
use sound::backend_portaudio::*;
#[cfg(feature = "be-rsoundio")]
use sound::backend_rsoundio::*;
#[cfg(feature = "be-sdl2")]
use sound::backend_sdl2::*;
use std::{error, fmt};

/// Return type for the sound module functions.
pub type SoundResult<T> = Result<T, Error>;

// TODO: use [error-chain](https://github.com/brson/error-chain)
// or [quick-error](https://github.com/tailhook/quick-error)

/// Error types of the sound module.
#[derive(Debug, Clone)]
pub enum Error {
    /// Sound output backend error.
    #[cfg(any(feature = "be-portaudio", feature = "be-rsoundio", feature = "be-sdl2"))]
    Backend(BackendError),
    /// Invalid sample rate.
    SampleRateInvalid,
    /// Invalid buffer size for the given sample count.
    BufferSize,
    /// Overtone count does not match the reserved array size.
    OvertoneCountInvalid,
    /// Numerator cannot be 0, because frequencies can not be 0.
    NumeratorInvalid,
    /// Denominator cannot be 0 (division by zero error).
    DenominatorInvalid,
    /// The frequency is below the hearing range.
    FrequencyTooLow,
    /// The frequency exceeds the hearing range.
    FrequencyTooHigh,
    /// Frequency can not be zero or negative.
    FrequencyInvalid,
    /// This frequency function is a source, it can not use an input frequency buffer.
    FrequencySource,
    /// A rate must be positive.
    RateInvalid,
    /// Amplitude cannot be negative.
    AmplitudeInvalid,
    /// Amplitude change time is not positive.
    AmplitudeTimeInvalid,
    /// Amplitude change rate is out of the range allowed for the given function.
    AmplitudeRateInvalid,
    /// A time period must be positive.
    PeriodInvalid,
    /// A time duration must be positive.
    DurationInvalid,
    /// Channel of the given number does not exist.
    ChannelInvalid,
    /// Beats per minute must be positive.
    TempoInvalid,
    /// Timing option does not match the method.
    TimingInvalid,
    /// The selected progress option is invalid for this case.
    ProgressInvalid,
    /// Progress is finished.
    ProgressCompleted,
    /// The number of items completed in an unfinished buffer operation.
    ItemsCompleted(usize),
    /// The Sequence has no items.
    SequenceEmpty,
    /// Item at the given index does not exist.
    ItemInvalid,
    /// Overflow occured during calculations.
    Overflow,
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        use std::error::Error;
        f.write_str(self.description())
    }
}

impl error::Error for Error {
    fn description(&self) -> &str {
        use self::Error::*;
        match *self {
            #[cfg(any(feature = "be-portaudio", feature = "be-rsoundio", feature = "be-sdl2"))]
            Backend(ref err) => err.description(),
            SampleRateInvalid => "invalid sample rate",
            BufferSize => "incorrect buffer size",
            OvertoneCountInvalid => "invalid overtone count",
            NumeratorInvalid => "invalid numerator",
            DenominatorInvalid => "invalid denominator",
            FrequencyTooLow => "frequency is below the hearing range",
            FrequencyTooHigh => "frequency exceeds the hearing range",
            FrequencyInvalid => "frequency can not be zero or negative",
            FrequencySource => "input frequency buffer can not be used",
            RateInvalid => "invalid rate",
            AmplitudeInvalid => "invalid amplitude",
            AmplitudeTimeInvalid => "invalid amplitude change time",
            AmplitudeRateInvalid => "invalid amplitude decay rate",
            PeriodInvalid => "invalid period",
            DurationInvalid => "invalid duration",
            ChannelInvalid => "invalid channel",
            TempoInvalid => "beats per minute must be positive",
            TimingInvalid => "invalid timing option",
            ProgressInvalid => "invalid progress option",
            ProgressCompleted => "progress completed",
            ItemsCompleted(_) => "",
            SequenceEmpty => "sequence has no items",
            ItemInvalid => "the item does not exist",
            Overflow => "overflow",
        }
    }

    fn cause(&self) -> Option<&error::Error> {
        match *self {
            #[cfg(any(feature = "be-portaudio", feature = "be-rsoundio", feature = "be-sdl2"))]
            self::Error::Backend(ref err) => Some(err),
            _ => None,
        }
    }
}

#[cfg(any(feature = "be-portaudio", feature = "be-rsoundio", feature = "be-sdl2"))]
impl From<BackendError> for Error {
    fn from(e: BackendError) -> Self {
        Error::Backend(e)
    }
}
