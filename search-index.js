var searchIndex = {};
searchIndex["scaleless_music"] = {"doc":"Create scaleless music.","items":[[0,"sound","scaleless_music","Basic sound synthesizer routines.",null,null],[5,"get_sample_time","scaleless_music::sound","Calculates the period of one sample for the given sample rate.\nSample rates below 1.0 are considered to be invalid.",null,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[0,"errors","","Error messages.",null,null],[4,"Error","scaleless_music::sound::errors","Error types of the sound module.",null,null],[13,"Backend","","Sound output backend error.",0,null],[13,"SampleRateInvalid","","Invalid sample rate.",0,null],[13,"BufferSize","","Invalid buffer size for the given sample count.",0,null],[13,"OvertoneCountInvalid","","Overtone count does not match the reserved array size.",0,null],[13,"NumeratorInvalid","","Numerator cannot be 0, because frequencies can not be 0.",0,null],[13,"DenominatorInvalid","","Denominator cannot be 0 (division by zero error).",0,null],[13,"FrequencyTooLow","","The frequency is below the hearing range.",0,null],[13,"FrequencyTooHigh","","The frequency exceeds the hearing range.",0,null],[13,"FrequencyInvalid","","Frequency can not be zero or negative.",0,null],[13,"FrequencySource","","This frequency function is a source, it can not use an input frequency buffer.",0,null],[13,"RateInvalid","","A rate must be positive.",0,null],[13,"AmplitudeInvalid","","Amplitude cannot be negative.",0,null],[13,"AmplitudeTimeInvalid","","Amplitude change time is not positive.",0,null],[13,"AmplitudeRateInvalid","","Amplitude change rate is out of the range allowed for the given function.",0,null],[13,"PeriodInvalid","","A time period must be positive.",0,null],[13,"DurationInvalid","","A time duration must be positive.",0,null],[13,"ChannelInvalid","","Channel of the given number does not exist.",0,null],[13,"TempoInvalid","","Beats per minute must be positive.",0,null],[13,"TimingInvalid","","Timing option does not match the method.",0,null],[13,"ProgressInvalid","","The selected progress option is invalid for this case.",0,null],[13,"ProgressCompleted","","Progress is finished.",0,null],[13,"ItemsCompleted","","The number of items completed in an unfinished buffer operation.",0,null],[13,"SequenceEmpty","","The Sequence has no items.",0,null],[13,"ItemInvalid","","Item at the given index does not exist.",0,null],[13,"Overflow","","Overflow occured during calculations.",0,null],[6,"SoundResult","","Return type for the sound module functions.",null,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[11,"description","","",0,null],[11,"cause","","",0,null],[11,"from","","",0,{"inputs":[{"name":"backenderror"}],"output":{"name":"self"}}],[0,"interval","scaleless_music::sound","Frequency interval.",null,null],[3,"Interval","scaleless_music::sound::interval","Harmonic musical interval (of frequencies), represented by a rational number.",null,null],[17,"INTERVAL_UNISON","","unison (1:1)",null,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"default","","",1,{"inputs":[],"output":{"name":"interval"}}],[11,"new","","custom constructor",1,{"inputs":[{"name":"u16"},{"name":"u16"}],"output":{"name":"soundresult"}}],[11,"set","","Changes the interval.",1,null],[11,"get_ratio","","Returns the ratio of the frequency interval.",1,null],[11,"get_recip","","Returns the reciprocal of the frequency interval.",1,null],[11,"is_unison","","True, if the interval is `1:1`, aka. unison.",1,null],[11,"get_name","","Gives the common name of the interval (if there is any).",1,null],[11,"change_frequency","","Change a frequency according to the interval.",1,null],[11,"reverse_frequency","","Change a frequency according to the interval&#39;s reciprocal.",1,null],[11,"transpose","","Change a frequency according to the interval.",1,null],[11,"mul","","",1,null],[11,"div","","",1,null],[11,"fmt","","",1,null],[0,"frequency","scaleless_music::sound","Fuctions which provide frequency changes.",null,null],[3,"FrequencyConst","scaleless_music::sound::frequency","Frequency is not changing by time.",null,null],[3,"FrequencyChangeLinear","","Changing frequency linearly. Linearity means constant multiplication over time slices.",null,null],[3,"Vibrato","","Vibrato: sinusoidal modulation of the base frequency.",null,null],[8,"FrequencyFunction","","Input and output definition for the frequency functions.",null,null],[10,"get","","Provides the results of the frequency calculations.",2,null],[8,"FrequencyModulator","","Provides rhythmic frequency changes. As phase depends on the integral of tempo, only\nsequential reading is possible (cannot be parallelized).",null,null],[10,"get","","Provides the results of the modulation of an array of frequencies.\nTempo is given in beats per second.",3,null],[10,"apply","","Applies the modulation on an already existing array of frequencies. It multiplies\neach sample with it&#39;s new amplitude. Tempo is given in beats per second.",3,null],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"new","","custom constructor",4,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"change","","Change frequency in harmony with it&#39;s previous value.",4,null],[11,"get","","",4,null],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"new","","custom constructor",5,{"inputs":[{"name":"samplecalc"},{"name":"notevalue"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"set_phase","","Sets a new phase value.",5,null],[11,"get","","",5,null],[11,"apply","","",5,null],[0,"amplitude","scaleless_music::sound","Fuctions which provide amplitude changes.",null,null],[3,"AmplitudeConst","scaleless_music::sound::amplitude","Constant amplitude.",null,null],[3,"FadeLinear","","Linearly changing amplitude.",null,null],[3,"AmplitudeDecayExp","","Amplitude is decaying exponentially. The decay rate only depends on time, even when the\nduration is tempo dependent.\n[Exponential decay](https://en.wikipedia.org/wiki/Exponential_decay)",null,null],[3,"Tremolo","","[Tremolo](https://en.wikipedia.org/wiki/Tremolo), as sine variation of the amplitude.",null,null],[3,"AmplitudeSequence","","Sequence of several amplitude functions.",null,null],[3,"AmplitudeCombination","","Combination of several amplitude functions.",null,null],[3,"AmplitudeEqualLoudness","","[Equal-loudness contour](https://en.wikipedia.org/wiki/Equal-loudness_contour)\ndata used is described by the ISO 226:2003 standard\nsee also: https://plot.ly/~mrlyule/16/equal-loudness-contours-iso-226-2003/",null,null],[5,"is_valid_amplitude","","Checks if the given value is in the valid amplitude range.",null,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[8,"AmplitudeProvider","","Provides time dependent amlitude changes.",null,null],[10,"apply","","Applies the amplitude function over already existing samples. It multiplies each sample\nwith it&#39;s new amplitude.",6,null],[10,"apply_rhythmic","","Applies the amplitude function over already existing samples. It multiplies each sample\nwith it&#39;s new amplitude. Tempo is given in beats per second.\nNote: as phase depends on the integral of tempo, only sequential reading is possible\n(cannot be parallelized).",6,null],[8,"AmplitudeJoinable","","The `AmplitudeJoinable` trait is used to specify the ability of joining amplitude structures\ntogether, forming a sequence of them.",null,null],[10,"set_amplitude_start","","Sets the initial amplitude, and resets time.",7,null],[10,"get_amplitude","","Provides the actual amplitude value.",7,null],[10,"get_max","","Provides the maximal possible future amplitude (for normalization).",7,null],[11,"fmt","","",8,null],[11,"clone","","",8,null],[11,"new","","Custom constructor.",8,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"apply","","",8,null],[11,"apply_rhythmic","","",8,null],[11,"set_timing","","",8,null],[11,"get_timing","","",8,null],[11,"restart","","",8,null],[11,"apply_parent_timing","","",8,null],[11,"set_amplitude_start","","",8,null],[11,"get_amplitude","","",8,null],[11,"get_max","","",8,null],[11,"fmt","","",9,null],[11,"clone","","",9,null],[11,"new","","Custom constructor.",9,{"inputs":[{"name":"progressoption"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"new_with_time","","Custom constructor with time based progress.",9,{"inputs":[{"name":"samplecalc"},{"name":"samplecalc"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"new_with_tempo","","Constructor with tempo based progress.\n`note_value` is the tempo relative fade duration.",9,{"inputs":[{"name":"samplecalc"},{"name":"notevalue"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"apply","","",9,null],[11,"apply_rhythmic","","",9,null],[11,"set_timing","","",9,null],[11,"get_timing","","",9,null],[11,"restart","","",9,null],[11,"apply_parent_timing","","",9,null],[11,"set_amplitude_start","","",9,null],[11,"get_amplitude","","",9,null],[11,"get_max","","",9,null],[11,"fmt","","",10,null],[11,"clone","","",10,null],[11,"new","","custom constructor\n`half_life` is the time required to reduce the amplitude to it&#39;s half.",10,{"inputs":[{"name":"samplecalc"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"apply","","",10,null],[11,"apply_rhythmic","","",10,null],[11,"set_timing","","",10,null],[11,"get_timing","","",10,null],[11,"restart","","",10,null],[11,"apply_parent_timing","","",10,null],[11,"set_amplitude_start","","",10,null],[11,"get_amplitude","","",10,null],[11,"get_max","","",10,null],[11,"fmt","","",11,null],[11,"clone","","",11,null],[11,"new","","Custom constructor.",11,{"inputs":[{"name":"progressoption"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"new_with_time","","Custom constructor with time based progress.",11,{"inputs":[{"name":"samplecalc"},{"name":"timingoption"},{"name":"samplecalc"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"new_with_tempo","","Constructor with tempo based progress.",11,{"inputs":[{"name":"samplecalc"},{"name":"timingoption"},{"name":"notevalue"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"apply","","",11,null],[11,"apply_rhythmic","","",11,null],[11,"set_timing","","",11,null],[11,"get_timing","","",11,null],[11,"restart","","",11,null],[11,"apply_parent_timing","","",11,null],[11,"clone","","",12,null],[11,"new","","Custom constructor.",12,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"add","","Adds a new amplitude function to the sequence.",12,null],[11,"apply","","",12,null],[11,"apply_rhythmic","","",12,null],[11,"set_timing","","",12,null],[11,"get_timing","","",12,null],[11,"restart","","",12,null],[11,"apply_parent_timing","","",12,null],[11,"set_amplitude_start","","",12,null],[11,"get_amplitude","","",12,null],[11,"get_max","","",12,null],[0,"amplitude_overtones","scaleless_music::sound","Fuctions which provide amplitude changes for overtones also.",null,null],[3,"AmplitudeConstOvertones","scaleless_music::sound::amplitude_overtones","Amplitude is not changing by time, this function gives the overtone amplitudes too.",null,null],[3,"AmplitudeDecayExpOvertones","","Amplitude is decaying exponentially, also for overtones\n[Exponential decay](https://en.wikipedia.org/wiki/Exponential_decay)\nindex: 0 = fundamental tone, 1.. = overtones.",null,null],[3,"AmplitudeOvertonesSequence","","A sequence of amplitude functions with overtones.",null,null],[8,"AmplitudeOvertonesProvider","","Provides time dependent amlitude changes both for the fundamental tone and for overtones.",null,null],[10,"next_chunk","","It is only for measuring time lapse. Does nothing else.",13,null],[10,"apply","","Applies the amplitude function over existing samples for a given overtone.\nFor the fundamental tone `overtone = 0`. It multiplies each sample with it&#39;s new amplitude.",13,null],[8,"AmplitudeOvertonesJoinable","","The `AmplitudeOvertonesJoinable` trait is used to specify the ability of joining\namplitude structures (with overtones) together, forming a sequence of them.",null,null],[10,"set_amplitudes_start","","Sets the initial amplitudes, and resets time.",14,null],[10,"get_amplitudes","","Provides the actual amplitude values.",14,null],[11,"fmt","","",15,null],[11,"clone","","",15,null],[11,"new","","custom constructor\nIt normalizes the amplitudes, so the sum of them will be 1.0.\n`overtone_count` is independent of the size of `amplitude`.",15,null],[11,"next_chunk","","",15,null],[11,"apply","","",15,null],[11,"set_timing","","",15,null],[11,"get_timing","","",15,null],[11,"restart","","",15,null],[11,"apply_parent_timing","","",15,null],[11,"set_amplitudes_start","","",15,null],[11,"get_amplitudes","","",15,null],[11,"fmt","","",16,null],[11,"clone","","",16,null],[11,"new","","custom constructor\nIt normalizes the amplitudes, so the sum of the starting amplitudes will be 1.0.\n`half_life` is the time required to reduce the amplitude to it&#39;s half.\n`overtone_count` is independent of the size of `amplitude` and `half_life` too.",16,null],[11,"next_chunk","","",16,null],[11,"apply","","",16,null],[11,"set_timing","","",16,null],[11,"get_timing","","",16,null],[11,"restart","","",16,null],[11,"apply_parent_timing","","",16,null],[11,"set_amplitudes_start","","",16,null],[11,"get_amplitudes","","",16,null],[11,"clone","","",17,null],[11,"new","","custom constructor",17,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"set_timing","","",17,null],[11,"get_timing","","",17,null],[11,"restart","","",17,null],[11,"apply_parent_timing","","",17,null],[11,"next_chunk","","",17,null],[11,"apply","","",17,null],[0,"wave","scaleless_music::sound","Fuctions which provide complete waveforms.",null,null],[3,"Wave","scaleless_music::sound::wave","A sinusoidal wave generator, with variable frequency.",null,null],[3,"Timbre","","A tone with optional overtones and amplitude modulation.\nSome examples: https://youtu.be/VRAXK4QKJ1Q?t=25s",null,null],[3,"Mixer","","Mixes sound channels (structures).",null,null],[11,"fmt","","",18,null],[11,"clone","","",18,null],[11,"new","","custom constructor",18,{"inputs":[{"name":"samplecalc"},{"name":"usize"}],"output":{"name":"soundresult"}}],[11,"get","","Gets the next samples of the wave.",18,null],[11,"set_interval","","Sets a new frequency interval.",18,null],[11,"set_phase","","Sets a new phase value.",18,null],[11,"clone","","",19,null],[11,"new","","Custom constructor",19,{"inputs":[{"name":"samplecalc"},{"name":"usize"},{"name":"rc"},{"name":"usize"}],"output":{"name":"soundresult"}}],[11,"set_interval","","Sets a new frequency interval.",19,null],[11,"set_amplitude","","Set a new amplitude function",19,null],[11,"set_timing","","",19,null],[11,"get_timing","","",19,null],[11,"restart","","",19,null],[11,"apply_parent_timing","","",19,null],[11,"get","","",19,null],[11,"clone","","",20,null],[11,"new","","custom constructor",20,{"inputs":[{"name":"samplecalc"},{"name":"usize"}],"output":{"name":"soundresult"}}],[11,"add","","Add a new channel to the mixer.",20,null],[11,"set_interval","","Sets a new interval for the channel, relative to the base frequency of the mixer.",20,null],[11,"set_volume","","Sets the relative volume of the channel.",20,null],[11,"set_timing","","",20,null],[11,"get_timing","","",20,null],[11,"restart","","",20,null],[11,"apply_parent_timing","","",20,null],[11,"get","","",20,null],[0,"rhythm","scaleless_music::sound","Rhythm section.",null,null],[3,"Tempo","scaleless_music::sound::rhythm","Constant speed of the music. See also: [Tempo](https://en.wikipedia.org/wiki/Tempo)",null,null],[3,"TempoChangeLinear","","Linearly changing speed of the music.",null,null],[3,"NoteValue","","The duration of a note relative to the duration of a beat.\nSee also: [Note value](https://en.wikipedia.org/wiki/Note_value)",null,null],[17,"NOTEVALUE_MAX","","`NoteValue` with maximal duration. (For testing purposes.)",null,null],[8,"TempoProvider","","The `TempoProvider` trait is used to provide tempo.",null,null],[10,"get_beat_duration","","Returns the beat duration for each sample in the `result` buffer.",21,null],[10,"get_beats_per_second","","",21,null],[11,"fmt","","",22,null],[11,"clone","","",22,null],[11,"default","","The default value is 120 beats per minute (= allegretto)",22,{"inputs":[],"output":{"name":"tempo"}}],[11,"new","","custom constructor",22,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"set_bpm","","Sets the tempo from the beats per minute.",22,null],[11,"set_beat_duration","","Sets the tempo from beat duration.",22,null],[11,"get_duration","","Returns the duration of one beat.",22,null],[11,"get_bpm","","Returns the number of beats per minute.",22,null],[11,"get_beat_duration","","",22,null],[11,"get_beats_per_second","","",22,null],[11,"fmt","","",23,null],[11,"clone","","",23,null],[11,"new","","custom constructor",23,{"inputs":[{"name":"samplecalc"},{"name":"tempo"},{"name":"tempo"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"set_note_value","","Sets duration calculated from the given note value.",23,null],[11,"get_beat_duration","","",23,null],[11,"get_beats_per_second","","",23,null],[11,"fmt","","",24,null],[11,"clone","","",24,null],[11,"default","","",24,{"inputs":[],"output":{"name":"notevalue"}}],[11,"new","","custom constructor",24,{"inputs":[{"name":"u16"},{"name":"u16"}],"output":{"name":"soundresult"}}],[11,"set","","Changes the note value.",24,null],[11,"get_notes_per_beat","","Provides the number of notes per beat.",24,null],[11,"get_duration_in_beats","","Provides the duration measured in beats.",24,null],[11,"add","","",24,null],[11,"checked_add","","",24,null],[11,"mul","","",24,null],[11,"checked_mul","","",24,null],[11,"fmt","","",24,null],[0,"progress","scaleless_music::sound","Time and tempo based progress measurement.",null,null],[3,"ProgressTime","scaleless_music::sound::progress","Time based progress measurement. It provides the sequence of phases (for sound functions) by\ncalling `next_phase()`. The whole duration can be divided to periods, for periodic functions.",null,null],[3,"ProgressTempo","","Tempo based progress measurement. It provides the sequence of phases (for sound functions) by\ncalling `next_phase()`. The whole duration can be divided to periods, for periodic functions.",null,null],[4,"ProgressOption","","Time or tempo based progress.",null,null],[13,"Time","","Time based progress.",25,null],[13,"Tempo","","Rhythmic, tempo synchronized progress.",25,null],[8,"Progress","","Common methods of the Progress types.",null,null],[10,"set_period_unit","","Sets a new period unit, and restarts the progress. Period unit is the amount of phase\nchange during one period.",26,null],[10,"set_phase_init","","Sets a new initial phase value, and restarts the progress.",26,null],[10,"simplify","","Simplifies the phase to achieve higher accuracy. It is only used for periodic functions.",26,null],[10,"next_by_time","","Provides the next phase value, or `Error::ProgressCompleted` if the progress is finished.",26,null],[10,"next_by_tempo","","Provides the next phase value depending on the actual tempo, or\n`Error::ProgressCompleted` if progress is finished.\nTempo value is given in beats per second.",26,null],[10,"get_phase","","Returns the actual phase value.",26,null],[11,"fmt","","",27,null],[11,"clone","","",27,null],[11,"new","","Custom constructor with duration. The default duration is the period.\nThe default period unit is π x 2.",27,{"inputs":[{"name":"samplecalc"},{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"set_period","","Sets a new period, and restarts the progress.",27,null],[11,"set_frequency","","Sets a new period calculated from the given frequency, and restarts the progress.",27,null],[11,"set_timing","","",27,null],[11,"get_timing","","",27,null],[11,"restart","","",27,null],[11,"apply_parent_timing","","",27,null],[11,"set_period_unit","","",27,null],[11,"set_phase_init","","",27,null],[11,"simplify","","",27,null],[11,"next_by_time","","",27,null],[11,"next_by_tempo","","Note: it means: the duration is tempo dependent, but the phase change is time dependent.",27,null],[11,"get_phase","","",27,null],[11,"fmt","","",28,null],[11,"clone","","",28,null],[11,"new","","Custom constructor. The default period is the whole duration.\nThe default period unit is π x 2.",28,{"inputs":[{"name":"samplecalc"},{"name":"notevalue"}],"output":{"name":"soundresult"}}],[11,"set_period","","Sets a new period in tempo beats, and restarts the progress.",28,null],[11,"set_timing","","",28,null],[11,"get_timing","","",28,null],[11,"restart","","",28,null],[11,"apply_parent_timing","","",28,null],[11,"set_period_unit","","",28,null],[11,"set_phase_init","","",28,null],[11,"simplify","","",28,null],[11,"next_by_time","","",28,null],[11,"next_by_tempo","","",28,null],[11,"get_phase","","",28,null],[11,"fmt","","",25,null],[11,"clone","","",25,null],[11,"set_timing","","",25,null],[11,"get_timing","","",25,null],[11,"restart","","",25,null],[11,"apply_parent_timing","","",25,null],[11,"set_period_unit","","",25,null],[11,"set_phase_init","","",25,null],[11,"simplify","","",25,null],[11,"next_by_time","","",25,null],[11,"next_by_tempo","","",25,null],[11,"get_phase","","",25,null],[11,"from","","",25,{"inputs":[{"name":"progresstime"}],"output":{"name":"self"}}],[11,"from","","",25,{"inputs":[{"name":"progresstempo"}],"output":{"name":"self"}}],[0,"timing","scaleless_music::sound","Timing for the duration of sound components.",null,null],[3,"Timer","scaleless_music::sound::timing","Timer for sequence items, based on optional duration unit types.",null,null],[4,"TimingOption","","Optional duration type, for timings in sequences.",null,null],[13,"None","","Timing is turned off (= unlimited duration)",29,null],[13,"TimeConst","","Constant amount of time independent of rhythm.\nFor a sequence item, it is independent of the sequence&#39;s whole duration.",29,null],[13,"TimeRatio","","Proportion relative to a sequence&#39;s whole duration (in time).\nThe sequence&#39;s timing must be time based!",29,null],[12,"ratio","scaleless_music::sound::timing::TimingOption","Proportion.",29,null],[12,"duration","","The calculated duration value (from the ratio).",29,null],[13,"TempoConst","scaleless_music::sound::timing","Duration relative to the beat duration.\nFor a sequence item, it is independent of the sequence&#39;s whole duration.",29,null],[13,"TempoRatio","","Proportion relative to a sequence&#39;s whole duration.\nThe sequence&#39;s timing must be tempo based!",29,null],[12,"ratio","scaleless_music::sound::timing::TimingOption","Proportion.",29,null],[12,"duration","","The calculated duration in beats.",29,null],[8,"HasTimer","scaleless_music::sound::timing","It provides the timing functionality required for making sequences.",null,null],[10,"set_timing","","Sets the timing (duration) of the sequence item, and restarts the internal timer.",30,null],[10,"get_timing","","Provides the `TimingOption`.",30,null],[10,"restart","","Restarts the internal timer.",30,null],[10,"apply_parent_timing","","Applies the parent&#39;s timing to calculate it&#39;s own relative timing.\nIt is used for sequence items.",30,null],[11,"fmt","","",29,null],[11,"clone","","",29,null],[11,"fmt","","",31,null],[11,"clone","","",31,null],[11,"new","","custom constructor",31,{"inputs":[{"name":"samplecalc"}],"output":{"name":"soundresult"}}],[11,"get_sample_time","","Provides the sample time value.",31,null],[11,"jump_by_time","","Moves forward `sample_count` steps in time. If the elapsed time reaches the timing\nduration, it returns the count of samples wrapped in `Error::ItemsCompleted()`.",31,null],[11,"jump_by_tempo","","Moves forward `tempo.len()` steps. If the duration (in beats) is reached,\nit returns the count of samples wrapped in `Error::ItemsCompleted()`.\nTempo values are given in beats per second.",31,null],[11,"next_by_time","","Moves forward one sample step in time. If the elapsed time reaches the timing\nduration, it returns `Error::ProgressCompleted`.",31,null],[11,"next_by_tempo","","Moves forward one step. If the duration (in beats) is reached,\nit returns `Error::ProgressCompleted`.\nTempo value is given in beats per second.",31,null],[11,"set_timing","","",31,null],[11,"get_timing","","",31,null],[11,"restart","","",31,null],[11,"apply_parent_timing","","",31,null],[0,"note","scaleless_music::sound","Musical note structures.",null,null],[3,"Note","scaleless_music::sound::note","Musical note.",null,null],[11,"clone","","",32,null],[0,"backend_portaudio","scaleless_music::sound","[`PortAudio`](https://github.com/RustAudio/rust-portaudio) backend for sound playback.",null,null],[3,"SoundInterface","scaleless_music::sound::backend_portaudio","This is a wrapper around the sound output backend",null,null],[4,"BackendError","","Wrapper for the propagation of backend specific errors.",null,null],[13,"PortAudio","","Errors of the PortAudio backend.",33,null],[13,"Disconnected","","The SoundGenerator is disconnected, could not recieve the command",33,null],[6,"BackendResult","","Return type for the backend functions.",null,null],[11,"new","","Creates a new backend for sound playback.\nAt the moment all channels output the same sound.",34,{"inputs":[{"name":"u32"},{"name":"usize"},{"name":"u16"},{"name":"box"}],"output":{"name":"backendresult"}}],[11,"start","","Starts the sound output stream.",34,null],[11,"send_command","","Sends a command to the sound generator.",34,null],[11,"get_sample_rate","","Returns the sample rate of the sond output",34,null],[11,"get_channel_count","","Returns the channel count of the sond output",34,null],[11,"drop","","",34,null],[11,"fmt","","",33,null],[11,"clone","","",33,null],[11,"fmt","","",33,null],[11,"description","","",33,null],[11,"cause","","",33,null],[11,"from","","",33,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[6,"SampleOutput","scaleless_music::sound","Precision of the finally produced samples.",null,null],[6,"SampleCalc","","Precision of calculations. Changing it to `f64` can slow down some calculations 4 times.",null,null],[17,"BUFFER_SIZE_DEFAULT","","Sample count for calculations. It affects both latency and computation performance.\nLatency perception for musical instruments: over ~12ms is already disturbing for some players.",null,null],[17,"TONE_FREQUENCY_MIN","","= 3 Hz, the lowest feelable frequency. Tones below it will not be calculated. The hearable\nlowest is 12 Hz.\nSee: [hearing range](https://en.wikipedia.org/wiki/Hearing_range#Humans)",null,null],[17,"TONE_FREQUENCY_MAX","","= 28 kHz, the highest hearable (feelable) frequency. Overtones above this frequency are\nfiltered out from calculations.\nSee: [hearing range](https://en.wikipedia.org/wiki/Hearing_range#Humans)",null,null],[17,"SAMPLE_RATE_DEFAULT","","= 192 kHz, as humans can discern time differences of\n[5 microseconds](http://boson.physics.sc.edu/~kunchur/papers/gradual.pdf).\nHumans can hear &lt; 1° difference in the location of the sound source, when it is in front of\nthem. See also:\n[interaural time difference](https://en.wikipedia.org/wiki/Interaural_time_difference)",null,null],[17,"PI2","","= π x 2",null,null],[8,"SoundGenerator","","Sound sample generator for output (playback). It can also take real-time input (commands),\nthus musical instruments can be realized with it.",null,null],[16,"Command","","Message type.",35,null],[10,"get_samples","","Get the next `sample_count` amount of samples, put them in `result`",35,null],[10,"process_command","","Send a message to the `SoundGenerator`.",35,null],[8,"SoundStructure","","A sound component. Can be a simple wave or a complex structure of waves.",null,null],[10,"get","","Returns the calculated samples in the `result` buffer.",36,null],[8,"MusicStructure","","A structure of music.",null,null],[10,"get","","Returns the calculated samples in the `result` buffer.",37,null],[11,"from","","",38,{"inputs":[{"name":"interval"}],"output":{"name":"self"}}],[11,"from","","",38,{"inputs":[{"name":"notevalue"}],"output":{"name":"self"}}]],"paths":[[4,"Error"],[3,"Interval"],[8,"FrequencyFunction"],[8,"FrequencyModulator"],[3,"FrequencyConst"],[3,"Vibrato"],[8,"AmplitudeProvider"],[8,"AmplitudeJoinable"],[3,"AmplitudeConst"],[3,"FadeLinear"],[3,"AmplitudeDecayExp"],[3,"Tremolo"],[3,"AmplitudeSequence"],[8,"AmplitudeOvertonesProvider"],[8,"AmplitudeOvertonesJoinable"],[3,"AmplitudeConstOvertones"],[3,"AmplitudeDecayExpOvertones"],[3,"AmplitudeOvertonesSequence"],[3,"Wave"],[3,"Timbre"],[3,"Mixer"],[8,"TempoProvider"],[3,"Tempo"],[3,"TempoChangeLinear"],[3,"NoteValue"],[4,"ProgressOption"],[8,"Progress"],[3,"ProgressTime"],[3,"ProgressTempo"],[4,"TimingOption"],[8,"HasTimer"],[3,"Timer"],[3,"Note"],[4,"BackendError"],[3,"SoundInterface"],[8,"SoundGenerator"],[8,"SoundStructure"],[8,"MusicStructure"],[6,"SampleCalc"]]};
initSearch(searchIndex);